import React from "react";

const commands = [
  {
    command: "run create-project",
    description: "Generate the backend structure.",
  },
  {
    command: "run generate-snippet <snippet-name>",
    description: "Inject code snippets.",
  },
  {
    command: "run generate-ai-snippet <snippet-name>",
    description: "Create AI-powered code snippets.",
  },
];

const AvailableCommandsComponent = () => {
  return (
    <div id="commands" className="text-white py-8 sm:py-16 flex flex-col justify-center items-center px-4 sm:px-8">
      <div className="relative text-center max-w-3xl">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
          Available Commands
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-md text-gray-400 my-4 sm:my-6">
          Explore the essential commands for managing your backend projects efficiently. Use these commands to quickly set up your backend structure, inject code snippets, or create AI-powered snippets.
        </p>

        {/* Commands List */}
        <div className="space-y-6">
          {commands.map((cmd, index) => (
            <div key={index} className="max-w-full w-full sm:w-[28rem] mx-auto">
              {/* Terminal Style Card */}
              <div className="coding inverse-toggle px-4 sm:px-5 pt-3 sm:pt-4 shadow-lg text-gray-100 text-xs sm:text-sm font-mono subpixel-antialiased bg-gray-800 pb-4 sm:pb-6 pt-3 sm:pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="top mb-2 flex">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                  <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-3 sm:mt-4 flex">
                  <span className="text-green-400">computer:~$</span>
                  <p className="flex-1 typing items-center pl-2">
                    {cmd.command}
                  </p>
                </div>
              </div>

              {/* Description Below the Card */}
              <p className="text-gray-400 mt-2 sm:mt-2">
                {cmd.description}
              </p>
            </div>
          ))}
        </div>

        {/* Link to Detailed Docs */}
        <p className="text-sm sm:text-md text-gray-400 mt-4 sm:mt-6">
          For detailed usage instructions, refer to the{" "}
          <a
            href="https://www.npmjs.com/package/backend-generator-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            detailed documentation
          </a>.
        </p>
      </div>
    </div>
  );
};

export default AvailableCommandsComponent;

