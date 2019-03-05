import {
    ShaderMaterial
} from 'three';

import CustomMaterial from '../CustomMaterial';

import fragmentShader from './fragmentShader.glsl';
import vertexShader from './vertexShader.glsl';

class DaVinciMaterial extends CustomMaterial {
    constructor(
        {
            geometry,
            ...params
        }
    ) {
        super(params);

        this.geometry = geometry;
        this.material = new ShaderMaterial({
            uniforms: this.getUniforms(),
            vertexShader,
            fragmentShader
        });
    }

    animate() {
    }

    getUniforms() {
        return {};
    }

    getThreeInstance() {
        return Promise.resolve(this.material);
    }

}

export default DaVinciMaterial;

