import { DirectionalLight, AmbientLight } from "three";

const color = 0xaa98a9;
const intensity = 1;

export const directionalLight = new DirectionalLight(color, intensity * 6);
export const ambientLight = new AmbientLight(color, 0.25);

directionalLight.position.set(-1, 4, 1);
directionalLight.castShadow = true;
