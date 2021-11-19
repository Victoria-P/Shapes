import gsap from "gsap";

export const animateSphere = (mesh, i) => {
  reset(mesh);
  mesh.scale.set(3, 3, 3);

  return gsap.to(mesh.rotation, {
    duration: 3,
    ease: "power2.inOut",
    x: "+=4.7",
    z: "+=15",
  });
};

export const animatePyramid = (mesh, i) => {
  reset(mesh);
  mesh.scale.set(3, 3, 3);

  return gsap.to(mesh.rotation, {
    duration: i / 2 + 0.5,
    ease: "circ.out",
    z: "+=10",
  });
};

export const animateTorus = (mesh, i) => {
  reset(mesh);
  mesh.scale.set(3, 3, 3);

  return gsap.to(mesh.rotation, {
    duration: 3,
    ease: "expo.out",
    y: "+=6",
    z: "+=20  ",
  });
};

export const animateCube = (mesh, i) => {
  reset(mesh, true);
  mesh.scale.set(0.5 - i / 10, 0.5 - i / 10, 0.5 - i / 10);

  return gsap.to(mesh.rotation, {
    duration: i / 10,
    ease: "power0.inOut",
    y: "+=5",
    z: "+=5",
  });
};

const reset = (mesh, rotationReset) => {
  mesh.scale.set(0, 0, 0);
  mesh.position.set(0, 0, 0);
  if (rotationReset) mesh.rotation.set(0, 0, 0);
};
