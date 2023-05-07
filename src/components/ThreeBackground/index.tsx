import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import THREE from '../../../public/static/three';

const initRenderer = (container: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container?.appendChild(renderer.domElement);
  return renderer;
};

export default function ThreePage() {
  const containerRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container !== null) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = initRenderer(container);
      renderer.setSize(window.innerWidth, window.innerHeight);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);
      camera.position.z = 5;

      const animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        container?.removeChild(renderer.domElement);
      };
    }
  }, []);

  return <StyledCanvas ref={containerRef} />;
}

const StyledCanvas = styled('canvas')`
  display: block;
  position: fixed;
  /* width: ${window.innerWidth};
  height: ${window.innerHeight}; */
`;
