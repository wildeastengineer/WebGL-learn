import { PerspectiveCamera } from "three";

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
    }

    getThreeInstance() {
        return this.camera;
    }
}

export default Camera;
