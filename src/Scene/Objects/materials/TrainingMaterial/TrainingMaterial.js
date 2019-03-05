import {
    ShaderMaterial,
    Vector2
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

        this.webFolder = 'medieval-bricks';

        this.geometry = geometry;
        this.material = new ShaderMaterial({
            uniforms: this.getUniforms(),
            vertexShader,
            fragmentShader
        });

        // ---

        // this.u_time = 0;
        // this.vertexDisplacement = new Float32Array(this.geometry.attributes.position.count);
        //
        // for (let i = 0; i < this.vertexDisplacement.length; i++) {
        //     this.vertexDisplacement[i] = Math.sin(i);
        // }
        //
        // this.geometry.addAttribute('vertexDisplacement', new BufferAttribute(this.vertexDisplacement, 1));
    }

    animate() {
        // this.u_time += 0.01;
        //
        // this.material.uniforms.u_time.value = this.u_time;

        // this.geometry.attributes.vertexDisplacement.needsUpdate = true;

        //
        // this.material.uniforms.delta.value = 0.5 + Math.sin(this.delta);
        //
        // for (let i = 0; i < this.vertexDisplacement.length; i++) {
        //     this.vertexDisplacement[i] = 0.5 + Math.sin(i + this.delta);
        // }
        //
        // this.geometry.attributes.vertexDisplacement.needsUpdate = true;
    }

    getUniforms() {
        return {
            map: {
                type: 't',
                value: this.loadTexture('map.png')
            }
        };
    }

    getThreeInstance() {
        return Promise.resolve(this.material);
    }

}

export default TrainingMaterial;

