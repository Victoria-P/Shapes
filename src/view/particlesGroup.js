import * as THREE from "three";

class ParticleGroup {
    constructor(objectsDistance, sectionsAmount) {
        this.objectsDistance = objectsDistance;
        this.sectionsAmount = sectionsAmount;
        this.init();
    }

    init() {
        const particlesCount = 200;
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = this.objectsDistance * 0.5 - Math.random() * this.objectsDistance * this.sectionsAmount;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

        const particlesMaterial = new THREE.PointsMaterial({ color: 'white', sizeAttenuation: true, size: 0.03 });

        this.particles = new THREE.Points(particlesGeometry, particlesMaterial);
    }
}

export default ParticleGroup;