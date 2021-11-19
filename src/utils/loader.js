import * as THREE from "three";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';


const loader = new FBXLoader();

export const loadFBXModel = (name) => {

    return new Promise(resolve => {
        loader.load(`/models/${name}.fbx`, (model) => {
            const children = sortMeshes(model.children);
            children.forEach((child, i) => {
                child.material = new THREE.MeshNormalMaterial();
            });

            resolve(model);
        });
    })
}

const sortMeshes = (arr) => {
    return arr.sort((a, b) => {
        if (+a.name < +b.name) return -1;
        if (+a.name > +b.name) return 1;
        return 0;
    });
}