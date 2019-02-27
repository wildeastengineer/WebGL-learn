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
            35,
            ratio,
            1,
            1000
        );

        const cameraTargetHeight = 20;

        this.controls = new OrbitControls(this.camera);
        this.controls.target.y = cameraTargetHeight;

        this.camera.position.set(0, 70, 100);
        this.camera.lookAt(0, cameraTargetHeight, 0);
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
