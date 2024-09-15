import React from 'react';

const Hero = () => {
  return (
    <div id="#home" className="text-white min-h-[85vh] flex flex-col justify-center items-center  px-4 md:px-8">
      
      {/* Icon */}
      <div className="mb-6 w-32 inline-block">
          <img
            src="https://res.cloudinary.com/dsvxaty8u/image/upload/e_background_removal/f_png/v1726383893/Backend%20Generator%20CLI/2_h6glkz.png"
            alt="Ngendog Logo"
            className="w-16 h-16 mx-auto"
          />
        </div>

      <div className="relative text-center max-w-4xl">

        {/* AI Integrated label */}
        <div className="border-2 border-indigo-600 shadow-indigo-bottom text-gray-400 text-xs px-4 py-2 rounded-full mb-4 inline-flex items-center space-x-2">
          <span className="animate-pulse">⚡</span>
          <span className="text-center">
            The #1 CLI Tool for Backend Scaffolding, Productivity, and Workflow Optimization
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-5xl font-semibold mb-4">
          Build Backends Like a Pro in Minutes.
        </h1>

        {/* Subtitle */}
        <p className="text-md text-gray-400 mb-10">
          Streamline your project setup with Backend Generator CLI—your go-to tool for fast, flexible, and flawless backend scaffolding. Focus on what matters most: building exceptional applications.
        </p>

        {/* Buttons */}
        <div className="flex space-x-6 justify-center">
          <a href='https://www.npmjs.com/package/backend-generator-cli'>
          <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-md hover:bg-gradient-to-l text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            Get started for Free →
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
