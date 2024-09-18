import React from "react";
import { Tweet } from 'react-tweet';

const TweetWall = () => {
  return (
    <div id="installation" className="text-white py-8 sm:py-16 flex flex-col justify-center items-center px-4 sm:px-8">
      <div className="relative text-center max-w-6xl w-full">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Tweets Section
        </h2>


        {/* Centered Bento Grid for Tweets */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <Tweet id="1835407980592054391" />
          <Tweet id="1834548553550561365" />
        </div>
      </div>
    </div>
  );
};

export default TweetWall;

