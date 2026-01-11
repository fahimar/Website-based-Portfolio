import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black
     via-black to-gray-800 p-4 text-white relative"
    >
      {/* Sparkles Background Animation */}
      <div className="z-0 w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlescontact"
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
        className="flex flex-col p-4 justify-center max-w-screen-lg
      mx-auto h-full relative z-10"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline
          border-b-4 border-gray-500"
          >
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/8b3875ec-4fc2-427d-a358-0f79377241d0"
            method="POST"
            className="flex flex-col w-ful md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md
              text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md
              text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md
              text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b
            from-cyan-500 to-blue-500 px-6 py-3 my-8
            mx-auto flex items-center hover:scale-110 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
