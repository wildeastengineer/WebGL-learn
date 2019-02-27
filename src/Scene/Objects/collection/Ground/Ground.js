import {
    PlaneBufferGeometry,
    Math,
    Mesh,
    MeshStandardMaterial
} from 'three';

import SceneObject from '../SceneObject';

class Ground extends SceneObject {
    getMesh() {
        if (this.mesh) {
            return Promise.resolve(this.mesh);
        }

        this.mesh = new Mesh(
            this.getGeometry(),
            this.getMaterial()
        );

        this.mesh.receiveShadow = true;

        this.mesh.rotation.x = -Math.degToRad(90);

        return Promise.resolve(this.mesh);
    }

    getGeometry() {
        if (this.geometry) {
            return this.geometry;
        }

        const size = 500;

        this.geometry = new PlaneBufferGeometry(size, size, 32, 32);

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

export default Ground;
