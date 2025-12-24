import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { renderer, scene, resizeRendererToDisplaySize } from "./renderer";
import { camera } from "./camera";
import { directionalLight, ambientLight } from "./lights";
import { MeshInstance } from "./MeshInstance";

const player = new MeshInstance(1, 1, 1, 0xc0c0c0);
const ground = new MeshInstance(3, 0.25, 9, 0x2f4f4f);

player.castShadow = true;
player.receiveShadow = false;
ground.castShadow = false;
ground.receiveShadow = true;

ground.position.y = -2;

scene.add(player);
scene.add(ground);
scene.add(directionalLight);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

function render(time) {
  time *= 0.001;

  const canvas = renderer.domElement;
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  controls.update();

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);
