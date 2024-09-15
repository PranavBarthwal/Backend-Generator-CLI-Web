import React from "react";

const InstallationComponent = () => {
  return (
    <div id="installation" className="text-white py-8 sm:py-16 flex flex-col justify-center items-center px-4 sm:px-8">
      <div className="relative text-center max-w-3xl">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Easy Installation
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-md text-gray-400 my-4 sm:my-6">
          To get started, install the CLI tool globally using npm. This will enable you to quickly set up and manage your backend projects with ease.
        </p>

        {/* Code Block */}
        <div className="max-w-full w-full sm:w-[28rem] mx-auto">
          <div className="coding inverse-toggle px-4 sm:px-5 pt-3 sm:pt-4 shadow-lg text-gray-100 text-xs sm:text-sm font-mono subpixel-antialiased bg-gray-800 pb-4 sm:pb-6 pt-3 sm:pt-4 rounded-lg leading-normal overflow-hidden">
            <div className="top mb-2 flex">
              <div className="h-3 w-3 bg-red-500 rounded-full"></div>
              <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
              <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="mt-4 sm:mt-4 flex">
              <span className="text-green-400">computer:~$</span>
              <p className="flex-1 typing items-center pl-2">
                npm install -g backend-generator-cli
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationComponent;

