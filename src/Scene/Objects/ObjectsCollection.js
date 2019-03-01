import UrlHelper from './UrlHelper';
import getMaterial from './materials';

import {
    Bottle,
    Cube,
    Ground
} from './collection';

class ObjectsCollection {
    constructor() {
        const urlHelper = new UrlHelper();
        const commonObjectParams = {
            urlHelper,
            getMaterial
        };

        this.objects = [
            new Ground({
                ...commonObjectParams
            }),
            new Cube({
                ...commonObjectParams
            }),
            // new Bottle({
            //     ...commonObjectParams
            // })
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
