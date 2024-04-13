import { OrbitControls, useFBO } from "@react-three/drei";
import { Canvas, useFrame, extend, createPortal } from "@react-three/fiber";
import { useEffect, useMemo, useRef, forwardRef, useImperativeHandle, useState, Fragment } from "react";
import * as THREE from "three";
import * as TWEEN from "three/addons/libs/tween.module.js";
//import './ParticleShaderFiles/scene.css';

import SimulationMaterial from './ParticleShaderFiles/SimulationMaterial';

// eslint-disable-next-line import/no-webpack-loader-syntax
import vertexShader from "!!raw-loader!./ParticleShaderFiles/vertexShader.glsl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import fragmentShader from "!!raw-loader!./ParticleShaderFiles/fragmentShader.glsl";
import state from "pages/AIHumanity/state";

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = forwardRef((props, ref) =>{
    const size = 256;
    const [distanceFactor, setDistanceFactor] = useState(0.5)

    // This reference gives us direct access to our points
    const points = useRef();
    const simulationMaterialRef = useRef();

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1);
    const positions = new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]);
    const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);
    //const controls = new OrbitControls(camera, renderer.domElement);
    useImperativeHandle(ref, () => {
        return {
            zoomIn(event) {
                let factor = (event / 200 + 2.0)
                setDistanceFactor(factor)
                //console.log(`top3:${event}`)
            },
            zoomOut(event) {

            }
        };
    }, []);

    const renderTarget = useFBO(size, size, {
        minFilter: THREE.NearestFilter,
        magFilter: THREE.NearestFilter,
        format: THREE.RGBAFormat,
        stencilBuffer: false,
        type: THREE.FloatType,
    });

    // does not work, z always 0
    function zoom(constant) {
        //camera.position.x = camera.position.x * constant;
        //camera.position.y = camera.position.y * constant;
        camera.position.z = camera.position.z * constant;
        console.log(`${camera.position.z}`)
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
        simulationMaterialRef.current.distanceFactor = distanceFactor;
    });

    /*useImperativeHandle(ref, () => ({
        scrolled: (event) => {
            //console.log(`top2:${event}`)
            zoom(0.5)
        }
    })); */


    return (
        <>
            {createPortal(
                <mesh>
                    <simulationMaterial ref={simulationMaterialRef} args={[size, distanceFactor]} />
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
});


const Scene = forwardRef((prop, ref) => {
    const canvasRef = useRef(null)
    const particlesRef = useRef(null)
    const lightRef = useRef()
    const orbitControlRef = useRef()
    const testDivRef = useRef()
    const [offset, setOffset] = useState(0)

    useImperativeHandle(ref, () => {
        return {
            zoomIn(event) {
                setOffset(event)
                //console.log(`top2:${event}`)            
            }
        };
    }, []);

    const zoomFactor = useMemo(() => {
        //console.log(`top:${state.top.current}`)
        //return state.top.current
    }, [state])

    useEffect(() => {
        //particlesRef.current.zoom(0.5)
        //console.log(`top1:${state.top.current}`)
        //if (particlesRef != null && particlesRef != undefined) {
            
        //}
        //orbitControlRef.current.enableZoom(true)
        //console.log(`${testDivRef.current}`)
        //console.log(`${orbitControlRef.current}`)
        //particlesRef.current.zoomIn(0.5)
    }, [])

    return (
        <Canvas camera={{ position: [1.5, 1.5, 2.5] }} ref={canvasRef}>
            <ambientLight intensity={0.5} ref={lightRef} />
            <FBOParticles ref={ref} />
            <OrbitControls enableZoom={false} ref={orbitControlRef} />
            {/*<pointLight position={[10, 10, 10]} /> */}
        </Canvas>
    );
});

export default Scene;