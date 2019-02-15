import {
    Scene
} from 'three';

import Objects from './Objects';

class CustomScene {
    constructor() {
        this.scene = new Scene();

        this.obects = new Objects();
        this.obects.getMeshCollection()
            .forEach(mesh => this.scene.add(mesh));
    }

    getThreeInstance() {
        return this.scene;
    }
}

export default CustomScene;
