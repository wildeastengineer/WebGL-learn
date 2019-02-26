import { AnimationMixer } from 'three';
import {
    GLTFLoader
} from '../loaders';

class SceneObject {
    constructor(
        {
            urlHelper
        }
    ) {
        this.urlHelper = urlHelper;
        this.logger = console;

        this.mesh = null;
        this.mixer = null;

        this.createAnimation = this.createAnimation.bind(this);
    }

    animate(delta) {
        if (this.mixer) {
            this.mixer.update(delta);
        }
    }

    createAnimation(animation) {
        if (this.mesh) {
            this.mixer = new AnimationMixer(this.mesh);
            this.mixer.clipAction(animation).play();
        } else {
            this.logger.error('Can not create animation: mesh is not defined.');
        }
    }

    loadGLTFModel(modelUrl) {
        return new Promise((resolve, reject) => {
            const modelLoader = new GLTFLoader();

            modelLoader.load(
                modelUrl,
                this.loadGLTFModelFinished.bind(this, resolve),
                this.loadGLTFModelProgressed.bind(this),
                this.loadGLTFModelFailed.bind(this, reject)
            )
        });
    }

    loadGLTFModelFinished(resolve, gltf) {
        resolve(gltf);
    }

    loadGLTFModelProgressed(progress) {
        this.logger.log('onProgress', progress);
    }

    loadGLTFModelFailed(reject, error) {
        reject(error);
    }
}

export default SceneObject;
