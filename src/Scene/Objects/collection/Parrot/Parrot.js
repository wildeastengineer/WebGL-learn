import SceneObject from '../SceneObject';

class Parrot extends SceneObject {
    constructor(params) {
        super(params);
    }

    getMesh() {
        if (this.mesh) {
            return Promise.resolve(this.mesh);
        }

        const modelUrl = this.urlHelper.getModelUrl('parrot.glb');

        return this.loadGLTFModel(modelUrl);
    }
}

export default Parrot;
