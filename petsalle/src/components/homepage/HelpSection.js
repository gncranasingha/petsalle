import React from 'react';
import help from "../../assets/help.jpg"; 
import vector from "../../assets/Vector.png"; 
import { FaPlay } from 'react-icons/fa';

const HelpSection = () => {
  return (
    <div
      className="flex items-center justify-start h-[60vh] w-full pl-24 bg-cover rounded-2xl bg-center"
      style={{ 
        backgroundImage: `url(${help})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-lg p-6 bg-opacity-50 text-white">
        
        <div className="flex items-center mb-4">
          <h1 className="text-4xl font-bold text-[#003459]">Adoption</h1>
          <img src={vector} alt="Vector" className="ml-4 w-8 h-8" /> 
        </div>
        <h4 className="text-2xl font-bold mb-4 text-[#003459]">We need help. so do they.</h4>
        <p className="mb-6 text-[#003459]">
          Adopt a pet and give it a home,
          it will love you back unconditionally.
        </p>
        
      
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl text-white font-semibold">
            Explore Now
          </button>
          <button className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center">
            View Intro
            <FaPlay className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelpSection;
