import Cube from './Cube';

class ObjectsCollection {
    constructor() {
        this.objects = [
            new Cube()
        ];
    }

    getMeshCollection() {
        return this.objects.map(object => object.getMesh());
    }
}

export default ObjectsCollection;
