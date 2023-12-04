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
            I'm a Web Developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I have completed my B.SC in CSE from Ahsanullah University of
            Science and Technology with a CGPA of (3.005). My decision to pursue
            a tech job stemmed from an intrinsic passion for the digital realm
            and the transformative power of technology. Outside the confines of
            my curriculum, I've immersed myself in real-world projects and
            internships, giving me firsthand experience of the challenges and
            rewards that come with tech roles. Collaborative endeavours like
            hackathons and group coding challenges have not only refined my
            technical prowess but also emphasised the value of teamwork in tech
            solutions.Right now, I enjoy working on web-based applications that
            make use of technologies like HTML, CSS, Javascript,Tailwind, Next
            Js, and React,MongoDB.
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
