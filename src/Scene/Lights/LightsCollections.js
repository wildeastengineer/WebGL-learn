import {
    AmbientLight,
    DirectionalLight,
    CameraHelper
} from 'three';

const getDirectionalLight = (
    {
        position,
        castShadow
    }
) => {
    const light = new DirectionalLight(0xffffff, 0.6);

    if (castShadow) {
        light.castShadow = true;
        light.shadow.camera.left = -100;
        light.shadow.camera.right = 100;
        light.shadow.camera.bottom = -100;
        light.shadow.camera.top = 100;
    }

    light.position.set(
        position.x,
        position.y,
        position.z,
    );

    return light;
};

class LightsCollections {
    constructor() {
        const castShadow = true;
        const distance = 80;
        const showHelpers = false;

        const leftLight = getDirectionalLight({
            castShadow,
            position: {
                x: -distance * 0.7,
                y: distance,
                z: distance
            }
        });
        const rightLight = getDirectionalLight({
            castShadow,
            position: {
                x: distance * 0.7,
                y: distance,
                z: distance
            }
        });
        const ambientLight = new AmbientLight(0xffffff, 1);

        const helpers = showHelpers ?
            [
                new CameraHelper(leftLight.shadow.camera),
                new CameraHelper(rightLight.shadow.camera)
            ] :
            [];

        this.lights = [
            ambientLight,
            rightLight,
            leftLight,
            ...helpers
        ];
    }

    getInstanceCollection() {
        return this.lights;
    }
}

export default LightsCollections;
