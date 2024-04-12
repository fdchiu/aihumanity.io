import { OrbitControls, useFBO } from "@react-three/drei";
import { Canvas, useFrame, extend, createPortal } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import * as TWEEN from "three/addons/libs/tween.module.js";
//import './ParticleShaderFiles/scene.css';

import SimulationMaterial from './ParticleShaderFiles/SimulationMaterial';

// eslint-disable-next-line import/no-webpack-loader-syntax
import vertexShader from "!!raw-loader!./ParticleShaderFiles/vertexShader.glsl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import fragmentShader from "!!raw-loader!./ParticleShaderFiles/fragmentShader.glsl";

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = () => {
    const size = 256;

    // This reference gives us direct access to our points
    const points = useRef();
    const simulationMaterialRef = useRef();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
    const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]);
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);
    //const controls = new OrbitControls(camera, renderer.domElement);
    
    const renderTarget = useFBO(size, size, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: false,
        type: THREE.FloatType,
    });

    function zoom(constant) {
        camera.position.x = camera.position.x * constant;
        camera.position.y = camera.position.y * constant;
        camera.position.z = camera.position.z * constant;
    }
    function tween(inout) { // in - true, out - false

        /*let desiredDistance = inout ? controls.minDistance : controls.maxDistance;

        let dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        dir.negate();
        let dist = controls.getDistance();

        new TWEEN.Tween({ val: dist })
            .to({ val: desiredDistance }, 1000)
            .onUpdate(val => {
                camera.position.copy(controls.target).addScaledVector(dir, val.val);
            })
            .start();
            */
    }


    // Generate our positions attributes array
    const particlesPosition = useMemo(() => {
        const length = size * size;
        const particles = new Float32Array(length * 3);
        for (let i = 0; i < length; i++) {
            let i3 = i * 3;
            particles[i3 + 0] = (i % size) / size;
            particles[i3 + 1] = i / size / size;
        }
        return particles;
    }, [size]);

    const uniforms = useMemo(() => ({
        uPositions: {
            value: null,
        }
    }), [])

    useFrame((state) => {
        const { gl, clock } = state;

        gl.setRenderTarget(renderTarget);
        gl.clear();
        gl.render(scene, camera);
        gl.setRenderTarget(null);

        points.current.material.uniforms.uPositions.value = renderTarget.texture;

        simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    });

    return (
        <>
            {createPortal(
                <mesh>
                    <simulationMaterial ref={simulationMaterialRef} args={[size]} />
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            count={positions.length / 3}
                            array={positions}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="attributes-uv"
                            count={uvs.length / 2}
                            array={uvs}
                            itemSize={2}
                        />
                    </bufferGeometry>
                </mesh>,
                scene
            )}
            <points ref={points}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlesPosition.length / 3}
                        array={particlesPosition}
                        itemSize={3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    blending={THREE.AdditiveBlending}
                    depthWrite={false}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />
            </points>
        </>
    );
};

function handleScroll() {
    console.log("handleScroll")
    FBOParticles.zoom(2.0)
}

const Scene = () => {
    return (
        <Canvas camera={{ position: [1.5, 1.5, 2.5] }} onScroll={()=>handleScroll()}>
            <ambientLight intensity={0.5} />
            <FBOParticles />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default Scene;