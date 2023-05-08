import { useEffect, useRef } from 'react';

import { FontLoader, THREE, TextGeometry, helvetikerFont } from '../../../public/static/three';

const initRenderer = (container: HTMLDivElement) => {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  return renderer;
};

const getRandomPositions = () =>
  [-1, -0.6, -0.2, 0.2, 0.6, 1].map(x => ({
    x,
    y: Math.random() - 0.5,
    z: Math.random() - 0.5,
    rx: Math.random() * 4,
    ry: Math.random() * 4,
  }));

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const loader = new FontLoader();
  const font = loader.parse(helvetikerFont);

  useEffect(() => {
    const container = containerRef.current;
    if (container !== null) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 3); // 나보다 앞에 있으면 양수, 뒤에있으면 음수, 카메라의 위치
      camera.lookAt(new THREE.Vector3(0, 0, 0)); // 카메라가 0, 0, 0을 바라보게 함
      const renderer = initRenderer(container);

      const light = new THREE.DirectionalLight(0x63e043, 1);
      light.position.set(-1, 2, 4);
      scene.add(light);

      const geometry = new TextGeometry('3', {
        font,
        size: 0.36,
        height: 0.06,
        curveSegments: 1,
        bevelEnabled: true,
        bevelThickness: 0.01,
        bevelSize: 0.01,
        bevelOffset: 0.003,
        bevelSegments: 3,
      }).center();

      const material = new THREE.MeshStandardMaterial({
        color: '#63e043',
        roughness: 0.3,
        metalness: 0.7,
      });

      const positions = getRandomPositions();

      const meshes = positions.map(({ x, y, z, rx, ry }) => {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = x;
        mesh.position.y = y;
        mesh.position.z = z;
        mesh.rotation.x = rx;
        mesh.rotation.y = ry;
        return { mesh, y, z };
      });

      meshes.forEach(({ mesh }) => scene.add(mesh));

      const render = (time: number) => {
        time *= 0.0006;
        meshes.forEach(({ mesh, y, z }) => {
          mesh.position.y = Math.sin(time * 0.7) * y * 1.6;
          mesh.position.z = Math.cos(time) * z * 2 + 1;
          mesh.rotation.y = time;
        });

        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };

      requestAnimationFrame(render);

      const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', onWindowResize);

      return () => {
        container.removeChild(renderer.domElement);
        geometry.dispose();
        material.dispose();
      };
    }
  }, [font]);

  return <div ref={containerRef} />;
}
