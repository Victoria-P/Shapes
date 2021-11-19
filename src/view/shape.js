import AnimationsHandler from "../utils/animations";
import { loadFBXModel } from "../utils/loader";
import { animateSphere, animatePyramid, animateTorus, animateCube } from "./shapesActions";

export const SHAPES = {
    SPHERE: { name: 'SPHERE', animation: animateSphere },
    PYRAMID: { name: 'PYRAMID', animation: animatePyramid },
    TORUS: { name: 'TORUS', animation: animateTorus },
    CUBE: { name: 'CUBE', animation: animateCube }  
}

class Shape {
    constructor(name) {
        this.name = name;
        this.animations = [];
    }

    async init() {
        AnimationsHandler.add(this);
        this.view = await loadFBXModel(this.name.toLowerCase());
        this.view.name = this.name;
        this.animate();
        return this;
    }

    update(deltaTime) {
        if (!this.view) return;
        this.view.rotation.y += deltaTime * 0.12;
        if (this.name === 'cube') this.view.rotation.x += deltaTime * 0.1;
    }

    animate() {
        this.animations.forEach(animation => animation.pause());
        this.animations = this.view.children.map((child, i) => { 
            return SHAPES[this.name].animation(child, i);
        });
    }
}

export default Shape;