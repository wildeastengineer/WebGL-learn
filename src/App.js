import Stats from 'stats.js';

import Camera from './Camera';
import Renderer from './Renderer';
import Scene from './Scene';

const getContainerSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight
});

class App {
    constructor() {
        const containerSize = getContainerSize();

        this.camera = new Camera({
            ratio: containerSize.width / containerSize.height
        });

        this.scene = new Scene();
        this.renderer = new Renderer({
            width: containerSize.width,
            height: containerSize.height,
            devicePixelRatio: window.devicePixelRatio
        });

        this.stats = new Stats();
        this.stats.showPanel(0);

        document.body.appendChild(this.renderer.getDomElement());
        document.body.appendChild(this.stats.dom);

        this.renderFrame = this.renderFrame.bind(this);
        this.renderer.setAnimationLoop(this.renderFrame);

        this.subscribeOnEvents();
    }

    renderFrame() {
        this.stats.begin();

        this.scene.animate();
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });

        this.stats.end();
    }

    subscribeOnEvents() {
        this.handleWindowResize = this.handleWindowResize.bind(this);

        window.addEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize() {
        const containerSize = getContainerSize();

        this.camera.setAspect(containerSize.width / containerSize.height);
        this.renderer.setSize(containerSize.width, containerSize.height)
    }
}

export default App;
