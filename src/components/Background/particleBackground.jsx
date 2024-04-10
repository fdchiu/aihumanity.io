import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ParticleBackground() {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        const canvas = document.querySelector("canvas.background");
        let renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        new OrbitControls(camera, renderer.domElement);

        const img = new Image();
        let texture = new THREE.Texture(img);
        img.onload = () => {
            texture.needsUpdate = true;
            const material = new THREE.SpriteMaterial({
                size: 20,
                map: texture,
                blending: THREE.AdditiveBlending,
                transparent: true,
                depthTest: false,
            });
            const particle = new THREE.Sprite(material);
            particle.scale.x = particle.scale.y = 1;
            scene.add(particle);
        };
        img.src = "/images/img_ellipse_33.png";
        scene.add(camera);

        camera.position.z = 1;
        const animate = () => {
            const elapsedTime = new THREE.Clock().getElapsedTime();

            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();
    }, []);

    return (<canvas className="background" />);
};
