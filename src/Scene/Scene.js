import {
    Color,
    Fog,
    Scene
} from 'three';

import Lights from './Lights';
import Objects from './Objects';

class CustomScene {
    constructor() {
        const color = new Color('#e8e8e8');

        this.scene = new Scene();
        this.scene.background = color;
        this.scene.fog = new Fog(color, 150, 200);

        this.obects = new Objects();
        this.obects.getMeshCollection()
            .then((meshCollection) => {
                meshCollection.forEach(mesh => this.scene.add(mesh));
            });

        this.lights = new Lights();
        this.lights.getInstanceCollection()
            .forEach(light => this.scene.add(light));
    }

    animate(delta) {
        this.obects.animate(delta);
    }

    getThreeInstance() {
        return this.scene;
    }
}

export default CustomScene;
