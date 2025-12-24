import { Mesh, BoxGeometry, MeshPhongMaterial } from "three";

export class MeshInstance {
  constructor(sizeX, sizeZ, sizeY, materialColor) {
    this.mesh = new Mesh(new BoxGeometry(sizeX, sizeZ, sizeY), new MeshPhongMaterial({ color: materialColor }));
    return this.mesh;
  }
}
