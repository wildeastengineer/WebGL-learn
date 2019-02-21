import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial
} from 'three';

class Cube {
    constructor() {
        const mesh = this.getMesh();

        mesh.rotation.x = Math.PI / 4;
        mesh.rotation.y = Math.PI / 4;
    }

    animate() {
        const mesh = this.getMesh();

        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.003;
    }

    getMesh() {
        if (this.mesh) {
            return this.mesh;
        }

        this.mesh = new Mesh(
            this.getGeometry(),
            this.getMaterial()
        );

        return this.mesh;
    }

    getGeometry() {
        if (this.geometry) {
            return this.geometry;
        }

        this.geometry = new BoxBufferGeometry(2, 2, 2);

        return this.geometry;
    }

    getMaterial() {
        if (this.material) {
            return this.material;
        }

        this.material = new MeshStandardMaterial();

        return this.material;
    }
}

export default Cube;
