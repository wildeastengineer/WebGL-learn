import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial
} from 'three';

class Cube {
    constructor() {
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshBasicMaterial({
            color: 0xff0000
        });

        this.mesh = new Mesh(
            this.geometry,
            this.material
        );
    }

    getMesh() {
        return this.mesh;
    }
}

export default Cube;
