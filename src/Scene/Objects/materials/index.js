import DaVinciMaterial from './DaVinciMaterial';
import ThreeJsMaterial from './ThreeJsMaterial';
import TrainingMaterial from './TrainingMaterial';

const MATERIALS = {
    DaVinciMaterial,
    ThreeJsMaterial,
    TrainingMaterial
};

export default (materialName, constructorParams) => new Promise((resolve, reject) => {
    const Material = MATERIALS[materialName];

    if (typeof Material !== 'function') {
        return reject(new Error(`Material "${materialName}" is not defined`));
    }

    resolve(new Material(constructorParams));
});
