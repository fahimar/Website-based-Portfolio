import React from "react";
import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { SparklesCore } from "./ui/sparkles";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";

const Home = () => {
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
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I’m Fahim Al Rashid, a passionate Full Stack Developer with a B.Sc.
            in Computer Science and Engineering from Ahsanullah University of
            Science and Technology. Currently, I’m pursuing my M.Sc. in CSE
            (Professional) at Jagannath University. I have hands-on experience
            with technologies like React, Next.js, JavaScript, FastAPI, and
            MongoDB. My interest in tech began early, and through internships,
            hackathons, and real-world projects, I’ve developed strong
            problem-solving and teamwork skills. I enjoy building impactful web
            applications and continuously exploring fields like AI, cloud
            computing, and blockchain to expand my capabilities and contribute
            meaningfully to innovative tech-driven solutions.
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
