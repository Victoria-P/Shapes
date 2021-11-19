import Shape, { SHAPES } from "./shape";

class ShapeGroup {
    constructor(objectsDistance) {
        this.objectsDistance = objectsDistance;
        this.currentSection = 0;
    }

    async init() {
        window.addEventListener("scroll", () => this.handleScroll());

        this.sections = await this.load();
        const sectionMeshes = this.sections.map(({ view }) => view);
        this.setPosition(sectionMeshes);

        return sectionMeshes;
    }

    load() {
        const shapes = Object.keys(SHAPES).map(key => new Shape(SHAPES[key].name).init());
        return Promise.all(shapes);
    }

    handleScroll() {
        const newSection = Math.round(window.scrollY / window.innerHeight);
        if (newSection != this.currentSection && this.sections) {
            this.currentSection = newSection;
            this.sections[this.currentSection].animate();
        }
    }

    setPosition(objects) {
        objects.forEach((obj, i) => {
            obj.position.x = i % 2 > 0 ? -2 : 2;
            obj.position.y = -this.objectsDistance * i;
        })
    }
}

export default ShapeGroup;