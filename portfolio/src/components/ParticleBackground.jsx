// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const ParticleBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={{
//         fullScreen: { enable: false },
//         background: {
//           color: { value: "transparent" },
//         },
//         particles: {
//           number: { value: 50 },
//           color: { value: "#ffffff" },
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.3,
//             random: true,
//             anim: { enable: true, speed: 0.5 },
//           },
//           size: {
//             value: { min: 1, max: 3 },
//           },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "none",
//             outModes: { default: "out" },
//           },
//           links: {
//             enable: true,
//             distance: 100,
//             color: "#ffffff",
//             opacity: 0.2,
//             width: 1,
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: { enable: true, mode: "repulse" },
//             onClick: { enable: true, mode: "push" },
//           },
//           modes: {
//             repulse: { distance: 100, duration: 0.4 },
//             push: { quantity: 4 },
//           },
//         },
//         detectRetina: true,
//       }}
//     />
//   );
// };

// export default ParticleBackground;


import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="w-full h-full"
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" },
        },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 1 },
        },
      }}
    />
  );
};

export default ParticleBackground;
