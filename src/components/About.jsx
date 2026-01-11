import React from "react";
import { SparklesCore } from "./ui/sparkles";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black
     via-black to-gray-800 relative text-white"
    >
      {/* Sparkles Background Animation */}
      <div className="z-0 w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesabout"
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
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I have completed my B.Sc in CSE.As a dedicated problem solver with an
          insatiable curiosity for cutting-edge technologies, I have actively
          engaged in over 600 programming challenges across various online
          platforms. This extensive experience has not only honed my technical
          skills but also cultivated a mindset of perseverance and adaptability
          in the face of complex problems.Throughout my journey, I have
          discovered an unyielding passion for the realms of Software
          Development, Artificial Intelligence, and Blockchain technology. These
          fields, characterized by their transformative potential, have ignited
          my desire to contribute meaningfully to the ever-evolving tech
          landscape. I am interested in Web Development,Competitive Programming,
          Cloud Computing,and Machine Learning.
        </p>
        <br />
        <p className="text-xl">
          Also I was a member of Ahsanullah University of Science & Technology
          Debating Club. I love making friends.
        </p>
      </div>
    </div>
  );
};

export default About;
