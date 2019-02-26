import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from 'three';

import SceneObject from '../SceneObject';

class Cube extends SceneObject {
    constructor(params) {
        super(params);
    }
    getMesh() {
        if (this.mesh) {
            return Promise.resolve(this.mesh);
        }

        this.mesh = new Mesh(
            this.getGeometry(),
            this.getMaterial()
        );

        return Promise.resolve(this.mesh);
    }

    getGeometry() {
        if (this.geometry) {
            return this.geometry;
        }

        const size = 150;

        this.geometry = new BoxBufferGeometry(size, size, size);

        return this.geometry;
    }

    getMaterial() {
        if (this.material) {
            return this.material;
        }

        this.material = new MeshStandardMaterial({
            flatShading: false,
            map: this.getTexture()
        });

        return this.material;
    }

    getTexture() {
        const textureLoader = new TextureLoader();
        const textureUrl = this.urlHelper.getTextureUrl('uv_test_bw_1024.png');
        const texture = textureLoader.load(textureUrl);

        texture.anisotropy = 16;

        return texture;
    }
}

export default Cube;
