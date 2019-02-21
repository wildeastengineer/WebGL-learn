import Cube from './Cube';

class ObjectsCollection {
    constructor() {
        this.objects = [
            new Cube()
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
