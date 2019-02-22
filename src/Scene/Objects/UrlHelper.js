class UrlHelper {
    constructor() {
        this.baseUrl = 'http://localhost:9000/';
        this.texturesFolder = 'textures/';
        this.modelsFolder = 'models/';
    }

    getTextureUrl(texture) {
        return `${this.baseUrl}${this.texturesFolder}${texture}`;
    }

    getModelUrl(model) {
        return `${this.baseUrl}${this.modelsFolder}${model}`;
    }
}

export default UrlHelper;
