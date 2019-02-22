class UrlHelper {
    constructor() {
        this.baseUrl = 'http://localhost:9000/';
        this.texturesFolder = 'textures/';
    }

    getTextureUrl(texture) {
        return `${this.baseUrl}${this.texturesFolder}${texture}`;
    }
}

export default UrlHelper;
