import React, { useId } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const generatedId = useId();

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={cn(className)}
    >
      <Particles
        id={id || generatedId}
        className={cn("h-full w-full")}
        init={particlesInit}
        options={{
          background: {
            color: {
              value:
                background === "transparent"
                  ? "transparent"
                  : background || "#0d47a1",
            },
          },
          fullScreen: {
            enable: false,
            zIndex: 1,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: particleColor || "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: speed || 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: particleDensity || 80,
            },
            opacity: {
              value: { min: 0.1, max: 1 },
              animation: {
                enable: true,
                speed: speed || 1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: minSize || 1, max: maxSize || 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </motion.div>
  );
};
