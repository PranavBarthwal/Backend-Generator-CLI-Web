import React from 'react';

const PricingComponent = () => {
  return (
    <div id="pricing" className="text-white py-16 px-4 md:px-8">
      <div className="relative text-center max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
          Pricing Plan
        </h2>

        {/* Single Free Plan Card */}
        <div className="bg-opacity-30 backdrop-blur-lg border-2 border-indigo-600 p-8 rounded-2xl max-w-4xl mx-auto shadow-lg">
          <h3 className="text-3xl lg:text-4xl font-bold text-indigo-400 mb-4">
            Its Free! 
          </h3>
          <p className="text-3xl lg:text-4xl font-semibold mb-6">
            $0
          </p>
          <ul className="list-disc list-inside mb-6 text-gray-300 space-y-4 flex flex-col items-center">
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Unlimited Backend Scaffolding</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Unlimited AI snippet generation</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Unlimited Snippet Usage</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Regular Updates</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Documentation Access</span>
            </li>
          </ul>
          <p className="text-gray-400 mb-6">
            Perfect for personal projects, small teams, or just getting started!
          </p>
          
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            If you’re loving this, why not send a coffee my way to keep the vibes going?
          </p>
          <a
            href="https://www.buymeacoffee.com/PranavBarthwal"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 text-sm hover:bg-gradient-to-l text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            🧋 Buy Me a Coffee
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
