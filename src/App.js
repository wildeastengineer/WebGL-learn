import Camera from './Camera';
import Renderer from './Renderer';
import Scene from './Scene';

class App {
    constructor({}) {
        const windowSize = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        this.camera = new Camera({
            ratio: windowSize.width / windowSize.height
        });

        this.scene = new Scene();
        this.renderer = new Renderer({
            width: windowSize.width,
            height: windowSize.height
        });

        document.body.appendChild(this.renderer.getDomElement());

        this.loop = this.loop.bind(this);
        this.loop();
    }

    loop() {
        this.renderFrame();
        requestAnimationFrame(this.loop);
    }

    renderFrame() {
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        });
    }
}

export default App;
