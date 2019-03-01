import {
    BufferAttribute,
    ShaderMaterial
} from 'three';

import CustomMaterial from '../CustomMaterial';

import fragmentShader from './fragmentShader.glsl';
import vertexShader from './vertexShader.glsl';

class TrainingMaterial extends CustomMaterial {
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

        // ---

        this.delta = 0;
        this.vertexDisplacement = new Float32Array(this.geometry.attributes.position.count);

        for (let i = 0; i < this.vertexDisplacement.length; i++) {
            this.vertexDisplacement[i] = Math.sin(i);
        }

        this.geometry.addAttribute('vertexDisplacement', new BufferAttribute(this.vertexDisplacement, 1));
    }

    animate() {
        this.delta += 0.01;

        this.material.uniforms.delta.value = 0.5 + Math.sin(this.delta);

        for (let i = 0; i < this.vertexDisplacement.length; i++) {
            this.vertexDisplacement[i] = 0.5 + Math.sin(i + this.delta);
        }

        this.geometry.attributes.vertexDisplacement.needsUpdate = true;
    }

    getUniforms() {
        return {
            delta: {
                value: 0
            }
        };
    }

    getThreeInstance() {
        return Promise.resolve(this.material);
    }

}

export default TrainingMaterial;

