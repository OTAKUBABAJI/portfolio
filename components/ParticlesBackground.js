'use client';

import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const options = useMemo(
    () => ({
      background: {
        color: "#030303",
      },
      fullScreen: { enable: false },
      fpsLimit: 30,
      particles: {
        number: { value: 40, density: { enable: true, area: 1200 } },
        color: { value: ["#4fd8ff", "#c084fc"] },
        opacity: {
          value: 0.05,
          animation: { enable: true, speed: 0.15, minimumValue: 0.02 },
        },
        size: {
          value: { min: 4, max: 10 },
          animation: { enable: true, speed: 4, minimumValue: 2 },
        },
        shape: { type: ["polygon"], options: { polygon: { sides: 6 } } },
        move: {
          enable: true,
          speed: 0.4,
          direction: "none",
          outModes: { default: "bounce" },
        },
        links: { enable: false },
      },
      detectRetina: true,
    }),
    []
  );

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      <Particles id="tsparticles" particlesLoaded={() => {}} init={particlesInit} options={options} />
    </div>
  );
}

