import {
    MeshStandardMaterial,
    TextureLoader
} from 'three';

import CustomMaterial from '../CustomMaterial'

class ThreeJsMaterial extends CustomMaterial {
    constructor(params) {
        super(params);

        this.webFolder = 'medieval-bricks';
        this.textureLoader = new TextureLoader();
    }

    getThreeInstance() {
        const material = new MeshStandardMaterial({
            flatShading: false,
            map: this._loadTexture('map.png'),
            aoMap: this._loadTexture('ambient.png'),
            normalMap: this._loadTexture('normal.png'),
            roughnessMap: this._loadTexture('roughness.png'),
            lightMap: this._loadTexture('height.png')
        });

        return Promise.resolve(material);
    }

    _loadTexture(textureName) {
        return this.textureLoader.load(
            this.urlHelper.getTextureUrl(`${this.webFolder}/${textureName}`)
        );
    }
}

export default ThreeJsMaterial;
