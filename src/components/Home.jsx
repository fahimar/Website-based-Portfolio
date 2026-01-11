import React from "react";
import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { SparklesCore } from "./ui/sparkles";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { FlipWords } from "./ui/flip-words";

const Home = () => {
  const words = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative overflow-hidden"
    >
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row relative z-10">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white flex flex-wrap items-center gap-x-3">
            <span>I'm a</span>
            <span className="inline-block min-w-[200px] sm:min-w-[400px]">
              <FlipWords words={words} className="text-cyan-400" />
            </span>
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I’m Fahim Al Rashid, a Full Stack Developer with a B.Sc. in CSE,
            currently pursuing an M.Sc. I build scalable web applications using
            React, Next.js, and FastAPI, and I’m actively learning C# and .NET
            while exploring AI, cloud, and blockchain technologies.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500}>
              <InteractiveHoverButton
                text="Portfolio"
                className="w-40 text-base shadow-lg shadow-cyan-500/50"
              />
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-2/3 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
