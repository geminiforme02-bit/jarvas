import * as THREE from './vendor/three.module.min.js';

const canvas = document.getElementById('hero-canvas');
if (canvas && window.WebGLRenderingContext) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 9);

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const keyLight = new THREE.DirectionalLight(0x5eead4, 1.4);
  keyLight.position.set(5, 6, 6);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x60a5fa, 1.0);
  rimLight.position.set(-6, -3, 4);
  scene.add(rimLight);

  const group = new THREE.Group();
  scene.add(group);

  const shapeDefs = [
    { geo: new THREE.TorusKnotGeometry(1.05, 0.32, 140, 16), color: 0x5eead4 },
    { geo: new THREE.IcosahedronGeometry(0.95, 0), color: 0x60a5fa },
    { geo: new THREE.OctahedronGeometry(0.85, 0), color: 0xff7849 },
    { geo: new THREE.TorusGeometry(0.9, 0.26, 16, 60), color: 0x14b8a6 },
  ];

  const meshes = shapeDefs.map((def, i) => {
    const mat = new THREE.MeshStandardMaterial({
      color: def.color,
      roughness: 0.25,
      metalness: 0.4,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(def.geo, mat);
    const angle = (i / shapeDefs.length) * Math.PI * 2;
    mesh.position.set(
      Math.cos(angle) * 3.4 + 1.5,
      Math.sin(angle) * 1.8,
      i % 2 === 0 ? 0.5 : -1.2
    );
    mesh.userData.speed = 0.4 + Math.random() * 0.5;
    group.add(mesh);
    return mesh;
  });

  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
  });

  function resize() {
    const { innerWidth: w, innerHeight: h } = window;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener('resize', resize);
  resize();

  let lastTime = performance.now();
  function animate() {
    requestAnimationFrame(animate);
    const now = performance.now();
    const delta = (now - lastTime) / 1000;
    lastTime = now;

    meshes.forEach((mesh) => {
      mesh.rotation.x += delta * 0.25 * mesh.userData.speed;
      mesh.rotation.y += delta * 0.35 * mesh.userData.speed;
    });

    group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.04;
    group.rotation.x += (mouseY * 0.25 - group.rotation.x) * 0.04;

    renderer.render(scene, camera);
  }
  animate();
}
