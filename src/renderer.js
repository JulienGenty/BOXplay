import { WebGLRenderer, Scene } from "three";

export const canvas = document.querySelector("#canvas");
export const renderer = new WebGLRenderer({ antialias: true, canvas: canvas });
export const scene = new Scene();

export function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = Math.floor(canvas.clientWidth * pixelRatio);
  const height = Math.floor(canvas.clientHeight * pixelRatio);
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
