import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Component as MorphingCardStack } from "./ui/morphing-card-stack";
import { Briefcase, Code, Sparkles, Users } from "lucide-react";

const About = () => {
  const aboutCards = [
    {
      id: "1",
      title: "About Me",
      description:
        "I’m a Software Engineer with 1+ years of hands-on experience building scalable, user-centric web applications. I work across the full stack using React, Next.js, TypeScript, FastAPI, and PostgreSQL, with a strong focus on clean architecture, performance, and accessibility.",
      icon: <Code className="h-5 w-5" />,
      color: "linear-gradient(135deg, #1f2937 0%, #374151 100%)", // Dark Slate
    },
    {
      id: "2",
      title: "Current Role",
      description:
        "Currently working at Pioneer Alpha, where I contribute to production-grade platforms including AI-powered EdTech products. My work spans frontend architecture, API integration, SEO optimization, and analytics implementation.",
      icon: <Briefcase className="h-5 w-5" />,
      color: "linear-gradient(135deg, #0f766e 0%, #115e59 100%)", // Deep Teal
    },
    {
      id: "3",
      title: "Engineering Mindset",
      description:
        "I enjoy breaking down complex requirements into simple, intuitive digital experiences. I continuously grow as an engineer by exploring modern web technologies, backend systems, and cloud-native practices.",
      icon: <Sparkles className="h-5 w-5" />,
      color: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)", // Professional Blue
    },
    {
      id: "4",
      title: "Background",
      description:
        "B.Sc. in Computer Science & Engineering from Ahsanullah University of Science and Technology. Solved 900+ programming problems and actively developed strong communication skills through competitive debating.",
      icon: <Users className="h-5 w-5" />,
      color: "linear-gradient(135deg, #4b5563 0%, #6b7280 100%)", // Neutral Gray
    },
  ];

  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800
     via-black to-black relative text-white py-20"
    >
      {/* Sparkles Background Animation */}
      <div className="z-0 w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesabout"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={60}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-bold inline bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-medium">
            Software Engineer • Full Stack Developer • Problem Solver
          </p>
        </div>

        {/* Morphing Card Stack */}
        <div className="mt-8">
          <MorphingCardStack cards={aboutCards} defaultLayout="stack" />
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate about building impactful products that solve real-world
            problems. Always learning, always growing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
