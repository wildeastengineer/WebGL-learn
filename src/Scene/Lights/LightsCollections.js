import {
    AmbientLight,
    DirectionalLight
} from 'three';

class LightsCollections {
    constructor() {
        const ambientLight = new AmbientLight(0xffffff, 1);
        const frontLight = new DirectionalLight(0xffffff, 1);
        const backLight = new DirectionalLight(0xffffff, 1);

        frontLight.position.set(10, 10, 10);
        backLight.position.set(-10, 10, -10);

        this.lights = [
            ambientLight,
            backLight,
            frontLight
        ];
    }

    getInstanceCollection() {
        return this.lights;
    }
}

export default LightsCollections;
