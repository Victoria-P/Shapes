import AnimationsHandler from "../utils/animations";

class Parallax {
    constructor(camera) {
        this.cursor = { x: 0, y: 0 };
        this.camera = camera;
        this.init();
    }

    init() {
        window.addEventListener("mousemove", (event) => this.handleMouseMove(event));
        AnimationsHandler.add(this);
    }

    handleMouseMove(event) {
        this.cursor.x = event.clientX / window.innerWidth - 0.5;
        this.cursor.y = event.clientY / window.innerHeight - 0.5;
    }

    update(deltaTime) {
        const parallaxX = this.cursor.x * 0.5;
        const parallaxY = -this.cursor.y * 0.5;
        this.camera.position.x +=
            (parallaxX - this.camera.position.x) * 5 * deltaTime;
        this.camera.position.y +=
            (parallaxY - this.camera.position.y) * 5 * deltaTime;
    }
}

export default Parallax;