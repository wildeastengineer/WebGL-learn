import UrlHelper from './UrlHelper';

import {
    Bottle,
    Cube
} from './collection';

class ObjectsCollection {
    constructor() {
        const urlHelper = new UrlHelper();
        const commonObjectParams = {
            urlHelper
        };

        this.objects = [
            new Cube({
                ...commonObjectParams
            }),
            new Bottle({
                ...commonObjectParams
            })
        ];
    }

    animate(delta) {
        this.objects.forEach(object => object.animate(delta));
    }

    getMeshCollection() {
        return Promise.all(this.objects.map(object => object.getMesh()));
    }
}

export default ObjectsCollection;
