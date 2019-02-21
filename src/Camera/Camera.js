import {
    PerspectiveCamera
} from 'three';

import { OrbitControls } from './Controls';

class Camera {
    constructor(
        {
            ratio
        }
    ) {
        this.camera = new PerspectiveCamera(
            75,
            ratio,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        this.controls = new OrbitControls(this.camera);
    }

    getThreeInstance() {
        return this.camera;
    }

    setAspect(aspect) {
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
    }
}

export default Camera;
