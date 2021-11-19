import * as THREE from "three";
import AnimationsHandler from "./utils/animations";

class SceneManager {
    constructor(objectsDistance) {
        this.objectsDistance = objectsDistance;
        this.init();
    }

    init() {
        this.clock = new THREE.Clock();

        this.setupCanvas();
        this.setupScene();
        this.setupCamera();
        this.setupLights();
        this.setupRenderer();
        this.addListeners();
        this.render();
    }

    setupCanvas() {
        this.canvas = document.querySelector('canvas.webgl');
    }

    setupScene() {
        this.scene = new THREE.Scene();
    }

    setupCamera() {
        this.cameraGroup = new THREE.Group();
        this.scene.add(this.cameraGroup);

        this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 100);
        this.camera.position.z = 15;
        this.cameraGroup.add(this.camera);
    }

    setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        this.scene.add(ambientLight);
    }

    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    addListeners() {
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
    
    render = () => {
        AnimationsHandler.animate(this.clock.getDelta());

        this.camera.position.y = (-window.scrollY / window.innerHeight) * this.objectsDistance;

        this.renderer.render(this.scene, this.camera);

        window.requestAnimationFrame(this.render);
    }

}

export default SceneManager;