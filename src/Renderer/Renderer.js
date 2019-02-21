import {
    WebGLRenderer
} from 'three';

class Renderer {
    constructor(
        {
            width,
            height,
            devicePixelRatio
        }
    ) {
        this.renderer = new WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(
            width,
            height
        );
        this.renderer.setPixelRatio(devicePixelRatio);
    }

    render(
        {
            scene,
            camera
        }
    ) {
        this.renderer.render(
            scene.getThreeInstance(),
            camera.getThreeInstance()
        );
    }

    getDomElement() {
        return this.renderer.domElement;
    }

    setAnimationLoop(loopFunction) {
        this.renderer.setAnimationLoop(loopFunction);
    }

    setSize(width, height) {
        this.renderer.setSize(width, height);
    }
}

export default Renderer;
