import React, { useEffect, useRef } from 'react'
import './background.css'
import * as THREE from 'three';

const Background = () => {
  const containerRef = useRef(null);

  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //   const renderer = new THREE.WebGLRenderer({ alpha: true});

  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   containerRef.current.appendChild(renderer.domElement);
  //   renderer.setClearColor(0x0000ff, 0);

  //   const geometry = new THREE.TorusGeometry();
  //   const material = new THREE.MeshBasicMaterial({
  //     color: 0x00ff00,
  //     transparent: true,
  //     opacity: 0.8,
  //   });
  //   const cube = new THREE.Mesh(geometry, material);
  //   scene.add(cube);

  //   camera.position.z = 5;

  //   const animate = () => {
  //     requestAnimationFrame(animate);

  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;

  //     renderer.render(scene, camera);
  //   };

  //   animate();
  // })
  return (
    <>
    <div ref={containerRef} className='container'></div>
    <div className='front-display'>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
      <div className='rect'></div>
    </div>
    </>
  )
}

export default Background
