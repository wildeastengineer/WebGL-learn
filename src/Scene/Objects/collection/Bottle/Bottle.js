import {
    Group,
    Mesh,
    MeshStandardMaterial
} from 'three';

import SceneObject from '../SceneObject';

class Bottle extends SceneObject {
    constructor(params) {
        super(params);
    }

    getMesh() {
        if (this.mesh) {
            return Promise.resolve(this.mesh);
        }

        return Promise.all([
            this.getGeometry(),
            this.getMaterial()
        ]).then(([geometry, material]) => {
            this.mesh = new Group();

            this.mesh.add(new Mesh(geometry.bottle, material.bottle));
            this.mesh.add(new Mesh(geometry.neck, material.neck));
            this.mesh.add(new Mesh(geometry.labelFront, material.labelFront));
            this.mesh.add(new Mesh(geometry.labelBack, material.labelBack));

            return Promise.resolve(this.mesh);
        });
    }

    getGeometry() {
        if (this.geometry) {
            return Promise.resolve(this.geometry);
        }

        return this.loadGLTFModel(
            this.urlHelper.getModelUrl('wine-bottle/scene.gltf')
        )
            .then((gltf) => {
                this.geometry = {
                    bottle: gltf.scene.getChildByName('Material_0').geometry,
                    neck: gltf.scene.getChildByName('Material_2').geometry,
                    labelFront: gltf.scene.getChildByName('printarea-1_3').geometry,
                    labelBack: gltf.scene.getChildByName('printarea-2_5').geometry
                };

                return Promise.resolve(this.geometry);
            });
    }

    getMaterial() {
        if (this.material) {
            return Promise.resolve(this.material);
        }

        const commonMaterial = new MeshStandardMaterial({
            flatShading: false
        });

        this.material = {
            bottle: commonMaterial,
            neck: commonMaterial,
            labelFront: commonMaterial,
            labelBack: commonMaterial
        };

        return Promise.resolve(this.material);
    }
}

export default Bottle;
