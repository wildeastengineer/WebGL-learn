import {
    TextureLoader,
} from 'three';

class CustomMaterial {
    constructor(
        {
            logger,
            urlHelper
        }
    ) {
        this.logger = logger;
        this.urlHelper = urlHelper;
        this.textureLoader = new TextureLoader();

        this.webFolder = null;
        this.animateWarningShown = false;
    }

    animate() {
        if (!this.animateWarningShown) {
            this.logger.warn('Method "animate" is not implemented.');
            this.animateWarningShown = true;
        }
    }

    getThreeInstance() {
        throw new Error('Method "getThreeInstance" is not implemented.')
    }

    loadTexture(textureName) {
        if (!this.webFolder) {
            throw new Error('Material "webFolder" is not defined');
        }

        return this.textureLoader.load(
            this.urlHelper.getTextureUrl(`${this.webFolder}/${textureName}`)
        );
    }
}

export default CustomMaterial;
