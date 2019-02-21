import {
    DirectionalLight
} from 'three';

class LightsCollections {
    constructor() {
        const light = new DirectionalLight(0xffffff, 5.0);

        light.position.set(5, 0, 5);

        this.lights = [
            light
        ];
    }

    getInstanceCollection() {
        return this.lights;
    }
}

export default LightsCollections;
