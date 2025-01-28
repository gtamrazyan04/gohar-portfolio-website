import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as CANNON from "cannon-es";

const skills = [
  { name: "Java", icon: "/assets/skills/java.svg" },
  { name: "Python", icon: "/assets/skills/python.svg" },
  { name: "C", icon: "/assets/skills/c.svg" },
  { name: "C++", icon: "/assets/skills/c++.svg" },
  { name: "HTML", icon: "/assets/skills/html.svg" },
  { name: "CSS", icon: "/assets/skills/css.svg" },
  { name: "React", icon: "/assets/skills/react.svg" },
  { name: "PostgreSQL", icon: "/assets/skills/postgresql.svg" },
  { name: "Haskell", icon: "/assets/skills/haskell.svg" },
  { name: "Armenian", icon: "/assets/skills/am.png" },
  { name: "German", icon: "/assets/skills/de.png" },
  { name: "French", icon: "/assets/skills/fr.png" },
  { name: "English", icon: "/assets/skills/us.png" },
  { name: "Spanish", icon: "/assets/skills/es.png" },
  { name: "Italian", icon: "/assets/skills/it.png" },
];

const InteractiveBalls = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene, camera, renderer setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 10, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 20, 20);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    // Physics setup
    const world = new CANNON.World();
    world.gravity.set(0, -9.82, 0);

    // Add ground plane
    const groundMaterial = new CANNON.Material("groundMaterial");
    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({ mass: 0, material: groundMaterial });
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    const planeGeometry = new THREE.PlaneGeometry(50, 50);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Add spheres
    const objects = [];
    const textureLoader = new THREE.TextureLoader();

    skills.forEach((skill, i) => {
      // Physics
      const sphereMaterial = new CANNON.Material("sphereMaterial");
      const sphereShape = new CANNON.Sphere(1);
      const sphereBody = new CANNON.Body({
        mass: 1,
        shape: sphereShape,
        material: sphereMaterial,
      });
      sphereBody.position.set(
        Math.random() * 10 - 5,
        Math.random() * 5 + 5,
        Math.random() * 10 - 5
      );
      world.addBody(sphereBody);

      // Three.js sphere
      const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
      const sphereTexture = textureLoader.load(skill.icon);
      const sphereMaterialThree = new THREE.MeshStandardMaterial({
        map: sphereTexture,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterialThree);
      sphere.position.copy(sphereBody.position);

      scene.add(sphere);
      objects.push({ mesh: sphere, body: sphereBody });
    });

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      // Update physics
      world.step(1 / 60, delta, 3);
      objects.forEach((obj) => {
        obj.mesh.position.copy(obj.body.position);
        obj.mesh.quaternion.copy(obj.body.quaternion);
      });

      // Render
      renderer.render(scene, camera);
      controls.update();
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default InteractiveBalls;
