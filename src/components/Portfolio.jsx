import React from "react";
//import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import todo_NextJs from "../assets/portfolio/todo_NextJs.png";
import { SparklesCore } from "./ui/sparkles";
import { PortfolioCarousel } from "./ui/portfolio-carousel";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: todo_NextJs,
      codeLink:
        "https://github.com/fahimar/learnathon-2-NextJS/tree/main/class-1/todo_list-app",
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
      codeLink: "https://github.com/fahimar/Weathering_With_You_",
    },
  ];

  const handleCodeButtonClick = (codeLink) => {
    window.location.href = codeLink;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-gray-900 to-black w-full min-h-screen text-white py-20 relative"
    >
      {/* Sparkles Background Animation */}
      <div className="z-0 w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesportfolio"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full relative z-10"
      >
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-bold inline bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-300 font-medium">
            Check Out some of my work right here!!
          </p>
        </div>

        <PortfolioCarousel
          items={portfolio}
          onCodeClick={handleCodeButtonClick}
        />
      </div>
    </div>
  );
};

export default Portfolio;
