import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-black w-full min-h-screen text-white py-20 relative"
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

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full relative z-10">
        {/* Section Title */}
        <div className="pb-8 text-center">
          <h2 className="text-5xl font-bold inline bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 font-medium">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/8b3875ec-4fc2-427d-a358-0f79377241d0"
            method="POST"
            className="flex flex-col w-full md:w-2/3 lg:w-1/2 gap-4"
          >
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 hover:border-gray-600"
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 hover:border-gray-600"
            />

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="8"
              required
              className="p-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all duration-300 hover:border-gray-600 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>

        {/* Additional Contact Info (Optional) */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Or reach out directly at{" "}
            <a
              href="mailto:your.email@example.com"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 underline"
            >
              fahimalrashid@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
