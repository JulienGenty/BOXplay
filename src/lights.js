import { DirectionalLight, AmbientLight } from "three";

const color = 0xaa98a9;
const intensity = 1;

export const directionalLight = new DirectionalLight(color, intensity * 3);
export const ambientLight = new AmbientLight(color, Math.floor(intensity - 0.5));

directionalLight.position.set(-1, 2, 4);
