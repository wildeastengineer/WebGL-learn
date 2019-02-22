import {
    BoxBufferGeometry,
    Mesh,
    MeshStandardMaterial,
    TextureLoader
} from 'three';

class Parrot {
    constructor(
        {
            urlHelper
        }
    ) {
        this.urlHelper = urlHelper;

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

export default Parrot;
