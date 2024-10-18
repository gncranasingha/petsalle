import React from 'react';
import banner from "../../assets/ban.jpg"; // Ensure the image path is correct
import { FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div
      className="flex items-center justify-start h-[70vh] pl-24 bg-cover bg-center" // Set height to 60% of the viewport height
      style={{ backgroundImage: `url(${banner})` }} // Use template literals for proper interpolation
    >
      <div className="max-w-lg p-6 bg-opacity-50 text-white">
        <h1 className="text-4xl font-bold mb-4 text-[#003459]">Your Hero Title</h1>
        <p className="mb-6 text-[#003459]">
          This is a description of your hero section. It can include a brief overview of your content or a catchy phrase to attract visitors.
        </p>
        
        {/* Flex container for buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center">
            View Intro
            <FaPlay className="ml-2" /> {/* Play icon */}
          </button>

          <button className="px-4 py-2 bg-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl text-white font-semibold">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
