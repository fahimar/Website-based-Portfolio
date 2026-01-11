import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// Shader Material for Neural Network Effect
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  #ifdef GL_ES
    precision mediump float;
  #endif
  uniform float iTime;
  uniform vec2 iResolution;
  varying vec2 vUv;

  vec4 sigmoid(vec4 x) {
    return 1.0 / (1.0 + exp(-x));
  }

  vec4 cppn_fn(vec2 coordinate, float in0, float in1, float in2) {
    // Input layer
    vec4 input1 = vec4(coordinate.x, coordinate.y, 0.395 + in0, 0.36 + in1);
    vec4 input2 = vec4(0.14 + in2, sqrt(coordinate.x * coordinate.x + coordinate.y * coordinate.y), 0.0, 0.0);

    // First hidden layer
    vec4 layer1 = mat4(
      vec4(6.54, -3.61, 0.76, -1.14),
      vec4(2.46, 3.17, 1.22, 0.06),
      vec4(-5.48, -6.16, 1.87, -4.77),
      vec4(6.04, -5.54, -0.91, 3.25)
    ) * input1 + mat4(
      vec4(0.85, -5.72, 3.98, 1.65),
      vec4(-0.24, 0.58, -1.77, -5.35),
      vec4(0.0, 0.0, 0.0, 0.0),
      vec4(0.0, 0.0, 0.0, 0.0)
    ) * input2 + vec4(0.22, 1.12, -1.80, 5.03);

    // Second hidden layer
    vec4 layer2 = mat4(
      vec4(-3.35, -6.06, 0.56, -4.47),
      vec4(0.86, 1.74, 5.64, 1.61),
      vec4(2.49, -3.50, 1.72, 6.36),
      vec4(3.31, 8.21, 1.14, -1.17)
    ) * input1 + mat4(
      vec4(5.24, -13.03, 0.01, 15.87),
      vec4(2.99, 3.13, -0.89, -1.68),
      vec4(0.0, 0.0, 0.0, 0.0),
      vec4(0.0, 0.0, 0.0, 0.0)
    ) * input2 + vec4(-5.95, -6.57, -0.88, 1.54);

    // Apply activation
    layer1 = sigmoid(layer1);
    layer2 = sigmoid(layer2);

    // Output
    return vec4(layer1.x, layer1.y, layer1.z, 1.0);
  }

  void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    uv.y *= -1.0;
    gl_FragColor = cppn_fn(
      uv,
      0.1 * sin(0.3 * iTime),
      0.1 * sin(0.69 * iTime),
      0.1 * sin(0.44 * iTime)
    );
  }
`;

// Create shader material
const CPPNShaderMaterial = shaderMaterial(
  {
    iTime: 0,
    iResolution: new THREE.Vector2(1, 1)
  },
  vertexShader,
  fragmentShader
);

// Extend for JSX usage
extend({ CPPNShaderMaterial });

function ShaderPlane() {
  const meshRef = useRef();
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.iTime = state.clock.elapsedTime;
      const { width, height } = state.size;
      materialRef.current.iResolution.set(width, height);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.75, -0.5]}>
      <planeGeometry args={[4, 4, 32, 32]} />
      <cPPNShaderMaterial ref={materialRef} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gsap.fromTo(
      canvasRef.current,
      {
        filter: "blur(20px)",
        scale: 1.1,
        opacity: 0.7,
      },
      {
        filter: "blur(0px)",
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div
      ref={canvasRef}
      className="bg-black absolute inset-0 -z-10 w-full h-full"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <ShaderPlane />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
    </div>
  );
}

export default function NeuralNetworkHero({
  title = "Where algorithms become art",
  description = "A minimal hero with a neural canvas — crisp, elegant, and quietly expressive.",
  badgeText = "Generative Surfaces",
  badgeLabel = "New",
  ctaButtons = [],
  microDetails = ["Low‑weight font", "Tight tracking", "Subtle motion"],
}) {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const paraRef = useRef(null);
  const ctaRef = useRef(null);
  const badgeRef = useRef(null);
  const microRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;

    // Initial states
    gsap.set(badgeRef.current, { opacity: 0, y: -8 });
    gsap.set(headerRef.current, { opacity: 0, y: 30, filter: "blur(16px)" });
    gsap.set(paraRef.current, { opacity: 0, y: 8 });
    if (ctaRef.current) gsap.set(ctaRef.current, { opacity: 0, y: 8 });
    if (microRef.current) gsap.set(microRef.current, { opacity: 0, y: 6 });

    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.5 }, 0.0)
      .to(headerRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 }, 0.1)
      .to(paraRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.55");

    if (ctaRef.current) {
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35");
    }
    if (microRef.current) {
      tl.to(microRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.25");
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden"
      name="home"
    >
      <ShaderBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16 z-10">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
            {badgeLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">
            {badgeText}
          </span>
        </div>

        <h1
          ref={headerRef}
          className="max-w-2xl text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </h1>

        <p
          ref={paraRef}
          className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg"
        >
          {description}
        </p>

        {ctaButtons && ctaButtons.length > 0 && (
          <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
            {ctaButtons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${
                  button.primary
                    ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                {button.text}
              </a>
            ))}
          </div>
        )}

        {microDetails && microDetails.length > 0 && (
          <ul
            ref={microRef}
            className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60"
          >
            {microDetails.map((detail, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}
