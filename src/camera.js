import { PerspectiveCamera } from "three";

const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 5;

export const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.z = 2;
