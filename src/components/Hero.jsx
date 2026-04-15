import React from 'react';

const Hero = () => {
  return (
    <div className=" py-12 lg:py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-gray-500 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-medium rounded-lg shadow-md transition duration-300">
          + Add a Friend
        </button>

      </div>
    </div>
  );
};

export default Hero;