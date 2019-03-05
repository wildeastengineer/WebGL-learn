import {
    MeshStandardMaterial
} from 'three';

import CustomMaterial from '../CustomMaterial'

class ThreeJsMaterial extends CustomMaterial {
    constructor(params) {
        super(params);

        this.webFolder = 'medieval-bricks';
    }

    getThreeInstance() {
        const material = new MeshStandardMaterial({
            flatShading: false,
            map: this.loadTexture('map.png'),
            aoMap: this.loadTexture('ambient.png'),
            normalMap: this.loadTexture('normal.png'),
            roughnessMap: this.loadTexture('roughness.png'),
            lightMap: this.loadTexture('height.png')
        });

        return Promise.resolve(material);
    }
}

export default ThreeJsMaterial;
