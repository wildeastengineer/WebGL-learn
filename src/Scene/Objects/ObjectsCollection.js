import UrlHelper from './UrlHelper';

import Cube from './Cube';

class ObjectsCollection {
    constructor() {
        const urlHelper = new UrlHelper();
        const commonObjectParams = {
            urlHelper
        };

        this.objects = [
            new Cube({
                ...commonObjectParams
            })
        ];
    }
    animate() {
        this.objects.forEach(object => object.animate());
    }

    getMeshCollection() {
        return this.objects.map(object => object.getMesh());
    }
}

export default ObjectsCollection;
