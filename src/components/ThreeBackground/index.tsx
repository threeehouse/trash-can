import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import THREE from '../../../public/static/three';

const initRenderer = (container: HTMLDivElement) => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  return renderer;
};

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container !== null) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(1, 2, 1); // 나보다 앞에 있으면 양수, 뒤에있으면 음수, 카메라의 위치
      camera.lookAt(new THREE.Vector3(0, 0, 0)); // 카메라가 0, 0, 0을 바라보게 함
      const renderer = initRenderer(container);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(-1, 2, 4);
      scene.add(light);

      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshStandardMaterial({ color: 0x004fff });
      const cube = new THREE.Mesh(geometry, material);

      scene.add(cube);

      const render = (time: number) => {
        time *= 0.0005;
        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);

      return () => {
        container.removeChild(renderer.domElement);
      };
    }
  }, []);

  return <StyledContainer ref={containerRef} />;
}

const StyledContainer = styled('div')`
  display: block;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;
