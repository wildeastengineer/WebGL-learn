import {
    WebGLRenderer
} from 'three';

class Renderer {
    constructor(
        {
            width,
            height
        }
    ) {
        this.renderer = new WebGLRenderer();
        this.renderer.setSize(
            width,
            height
        );
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
}

export default Renderer;
