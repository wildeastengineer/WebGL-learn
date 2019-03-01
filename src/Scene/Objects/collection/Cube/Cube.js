import {
    BoxBufferGeometry,
    Mesh
} from 'three';

import SceneObject from '../SceneObject';

class Cube extends SceneObject {
    constructor(params) {
        super(params);

        this.size = 30;
        this.initialized = false;
    }

    animate() {
        if (this.initialized) {
            this.material.animate();
        }
    }

    getMesh() {
        if (this.mesh) {
            return Promise.resolve(this.mesh);
        }

        return this.getGeometry()
            .then((geometry) => this.getMaterial(geometry)
                .then(material => ({
                    geometry,
                    material
                })))
            .then(({ geometry, material }) => {
                this.mesh = new Mesh(
                    geometry,
                    material
                );

                this.mesh.castShadow = true;
                this.mesh.receiveShadow = false;

                this.moveOnGround();
                this.initialized = true;

                return this.mesh;
            });
    }

    getGeometry() {
        if (this.geometry) {
            return Promise.resolve(this.geometry);
        }

        const faceDensity = 16;

        this.geometry = new BoxBufferGeometry(
            this.size, this.size, this.size,
            faceDensity, faceDensity, faceDensity
        );

        return Promise.resolve(this.geometry);
    }

    getMaterial(geometry) {
        if (this.material) {
            return this.material.getThreeInstance();
        }

        return super.getMaterial('TrainingMaterial', {
            geometry
        }).then((material) => {
            this.material = material;

            return material.getThreeInstance();
        });
    }
}

export default Cube;
