import {
    Box3,
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

            this.mesh.add(getMesh(geometry.bottle, material.bottle));
            this.mesh.add(getMesh(geometry.neck, material.neck));
            this.mesh.add(getMesh(geometry.labelFront, material.labelFront));
            this.mesh.add(getMesh(geometry.labelBack, material.labelBack));

            this.moveOnGround();

            return Promise.resolve(this.mesh);

            function getMesh(geometry, material) {
                const mesh = new Mesh(geometry, material);

                mesh.castShadow = true;
                mesh.receiveShadow = false;

                return mesh;
            }
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
                    bottle: getGeometry(gltf, 'Material_0'),
                    neck: getGeometry(gltf, 'Material_2'),
                    labelFront: getGeometry(gltf, 'printarea-1_3'),
                    labelBack: getGeometry(gltf, 'printarea-2_5')
                };

                return Promise.resolve(this.geometry);

                function getGeometry(gltf, meshName) {
                    const geometry = gltf.scene.getChildByName(meshName).geometry;
                    const scale = 0.15;

                    return geometry.scale(scale, scale, scale);
                }
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
