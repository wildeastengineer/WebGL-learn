import {
    Color,
    Scene
} from 'three';

import Lights from './Lights';
import Objects from './Objects';

class CustomScene {
    constructor() {
        this.scene = new Scene();
        this.scene.background = new Color('skyblue');

        this.obects = new Objects();
        this.obects.getMeshCollection()
            .forEach(mesh => this.scene.add(mesh));

        this.lights = new Lights();
        this.lights.getInstanceCollection()
            .forEach(light => this.scene.add(light));
    }

    animate() {
        this.obects.animate();
    }

    getThreeInstance() {
        return this.scene;
    }
}

export default CustomScene;
