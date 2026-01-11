import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { IconCloud } from "./ui/interactive-icon-cloud";

const Experience = () => {
  // Technology slugs for the icon cloud
  const techSlugs = [
    "typescript",
    "javascript",
    "python",
    "cplusplus",
    "c",
    "react",
    "nextdotjs",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "fastapi",
    "postgresql",
    "mysql",
    "mongodb",
    "firebase",
    "tailwindcss",
    "git",
    "github",
    "docker",
    "vercel",
    "visualstudiocode",
    "figma",
    "postman",
    "npm",
    "redux",
    "graphql",
    "amazonaws",
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black via-gray-900 to-black w-full min-h-screen text-white py-20 relative"
    >
      {/* Sparkles Background Animation */}
      <div className="z-0 w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesexperience"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full relative z-10">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-bold inline bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tools I Play With
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-medium">
            Technologies & Tools I Work With Daily
          </p>
        </div>

        {/* Icon Cloud Container */}
        <div className="flex items-center justify-center py-8">
          <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>

            {/* Icon Cloud */}
            <div className="relative w-full h-full flex items-center justify-center">
              <IconCloud iconSlugs={techSlugs} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From frontend frameworks to backend systems, cloud platforms to
            databases - I enjoy exploring and mastering tools that help build
            better products.
          </p>
        </div>

        {/* Stats or Additional Info (Optional) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              5+
            </h3>
            <p className="text-gray-400 mt-2">Languages</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              10+
            </h3>
            <p className="text-gray-400 mt-2">Frameworks</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              15+
            </h3>
            <p className="text-gray-400 mt-2">Tools</p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
              1+
            </h3>
            <p className="text-gray-400 mt-2">Years Exp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
