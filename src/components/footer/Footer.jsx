import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-indigo-600 py-8 px-4 md:px-8">
      <div className="container mx-auto text-white">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <img
              src="https://res.cloudinary.com/dsvxaty8u/image/upload/v1726383893/Backend%20Generator%20CLI/2_h6glkz.png"
              alt="Ngendog Logo"
              className="h-8 w-8"
            />
            <span className="text-md">Backend Generator CLI</span>
          </div>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Empowering developers with streamlined backend scaffolding and automation.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/PranavBarthwal/backend-generator-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/pranavbarthwal_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/pranavbarthwal03/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:pbarthwal90@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Backend Generator CLI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

