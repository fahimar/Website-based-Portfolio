import React from "react";
import HeroImage from "../assets/heroImage.png";
import { CgArrowRightR } from "react-icons/cg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black 
     via-black to-gray-800"
    >
      {/* <img
        className="rounded-full w-96 h-96"
        src={HeroImage}
        alt="image description"
      /> */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col mx-auto justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            I'm a Saas Builder [Full Stack Developer]
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
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group shadow-lg text-white w-fit px-6 py-3 my-2 flex
            items-center rounded-md bg-gradient-to-r from-cyan-500 shadow-purple-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <CgArrowRightR size={30} className="ml-1" />
              </span>
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
