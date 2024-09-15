import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [starCount, setStarCount] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/PranavBarthwal/backend-generator-cli');
        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching star count:', error);
      }
    };

    fetchStarCount();
  }, []);

  return (
    <nav className="bg-black border-b-2 z-10 sticky top-0 border-indigo-600 px-4 py-4 shadow-indigo-bottom">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="https://res.cloudinary.com/dsvxaty8u/image/upload/v1726383893/Backend%20Generator%20CLI/2_h6glkz.png" alt="Ngendog Logo" className="h-8 w-8" />
          <span className="text-white text-md">Backend Generator CLI</span>
        </div>

        {/* Navigation Links for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="text-white text-sm hover:text-indigo-600">Home</a></li>
          <li><a href="#installation" className="text-white text-sm hover:text-indigo-600">Installation</a></li>
          <li><a href="#commands" className="text-white text-sm hover:text-indigo-600">Available Commands</a></li>
          <li><a href="#stats" className="text-white text-sm hover:text-indigo-600">Stats</a></li>
          <li><a href="#pricing" className="text-white text-sm hover:text-indigo-600">Pricing</a></li>
        </ul>

        {/* Auth Buttons for Desktop */}
        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-indigo-600 text-sm hover:bg-gradient-to-l text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            <a
              href="https://github.com/PranavBarthwal/backend-generator-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white text-md hover:text-indigo-600"
            >
              <FaGithub size={20} /> {/* GitHub Icon */}
              <span>|</span>
              <span role="img" aria-label="star">⭐</span>
              <span>{starCount !== null ? starCount : 'Loading...'}</span>
            </a>
          </button>
          <a href='https://www.npmjs.com/package/backend-generator-cli'>
          <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-sm hover:bg-gradient-to-l text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl">
            Get started for Free →
          </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-black border-b-2 border-indigo-600`}>
        <ul className="flex flex-col space-y-4 py-4 px-6">
          <li><a href="#home" className="text-white text-sm hover:text-indigo-600">Home</a></li>
          <li><a href="#installation" className="text-white text-sm hover:text-indigo-600">Installation</a></li>
          <li><a href="#commands" className="text-white text-sm hover:text-indigo-600">Available Commands</a></li>
          <li><a href="#stats" className="text-white text-sm hover:text-indigo-600">Stats</a></li>
          <li><a href="#pricing" className="text-white text-sm hover:text-indigo-600">Pricing</a></li>
        </ul>

        {/* Auth Buttons for Mobile */}
        <div className="px-6 pb-4">
          <button className="border-2 border-indigo-600 text-sm hover:bg-gradient-to-l text-white px-4 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl w-full mb-2">
            <a
              href="https://github.com/PranavBarthwal/backend-generator-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-white text-md hover:text-indigo-600"
            >
              <FaGithub size={20} /> {/* GitHub Icon */}
              <span>|</span>
              <span role="img" aria-label="star">⭐</span>
              <span>{starCount !== null ? starCount : 'Loading...'}</span>
            </a>
          </button>
          <a href='https://www.npmjs.com/package/backend-generator-cli'>
          <button className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-sm hover:bg-gradient-to-l text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl w-full">
            Get started for Free →
          </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



