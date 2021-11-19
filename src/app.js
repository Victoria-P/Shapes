import SceneManager from "../src/sceneManager.js";
import Parallax from "./view/parallax.js";
import ParticleGroup from "./view/particlesGroup.js";
import ShapeGroup from "./view/shapeGroup.js";

class App {
    constructor() {
        this.objectsDistance = 10;
        this.init();
    }

    async init() {
        const shapes = await new ShapeGroup(this.objectsDistance).init();
        const { scene, cameraGroup } = new SceneManager(this.objectsDistance);
        const { particles } = new ParticleGroup(this.objectsDistance, shapes.length);
        const parallax = new Parallax(cameraGroup);
        scene.add(particles, ...shapes);
    }
}

export default App;