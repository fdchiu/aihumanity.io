import { render } from "@testing-library/react";
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ParticleBackground() {

    function getParticle(material) {
        return new THREE.Sprite(material)
    }

    useEffect(() => {    
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        const canvas =  document.querySelector("canvas.background");
        let renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        new OrbitControls(camera, renderer.domElement);

        const img = new Image();
        let texture = new THREE.Texture(img);
        var particle
        img.onload = () => {
            texture.needsUpdate = true;
            const material = new THREE.SpriteMaterial({
                size: 20,
                map: texture,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthTest: false,
            });
            //const particle = useMemo(getParticle, []);
            particle = new THREE.Sprite(material)
            particle.scale.x = particle.scale.y = 1;
            scene.add(particle);
            
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);            
            renderer.render(scene, camera);
            //animate(particle);
        };
        img.src = "images/Ellipse33.png";
        scene.add(camera);

        const animate = (particle) => {
            if (particle === null || particle === undefined) return
            const elapsedTime = new THREE.Clock().getElapsedTime();
            //not working
            if (particle !== undefined) {
                //particle.scale.x = 2
                //particle.scale.y = 2
            }

            //renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);

            requestAnimationFrame(animate);
        };

        camera.position.z = 1;
        // this not called because particle is undefined
        //animate(particle);
    }, []);

    return (<canvas className="background" />);
};
