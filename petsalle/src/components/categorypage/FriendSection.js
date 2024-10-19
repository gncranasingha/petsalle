import React from 'react';
import friendfun from "../../assets/friendfun.jpg";
import { FaPlay } from 'react-icons/fa';
import { AiOutlineRight } from "react-icons/ai";

const FriendSection = () => {
  return (
    <div>
      
      <p className="inline-flex items-center space-x-2 pb-5 text-gray-600">
        <span>Category</span> 
        <AiOutlineRight />
        <span>Dog</span> 
        <AiOutlineRight />
        <span>Small Dog</span>
      </p>

      <div
        className="flex items-center justify-end h-[50vh] pr-24 bg-cover rounded-2xl bg-center"
        style={{ 
          backgroundImage: `url(${friendfun})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >
        <div className="max-w-lg p-6 bg-opacity-50 text-white">
          <h1 className="text-4xl font-bold">One more friend</h1>
          <h4 className="text-2xl font-bold mb-4">Thousands more fun!</h4>
          <p className="mb-6">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          
          
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center">
              View Intro
              <FaPlay className="ml-2" /> 
            </button>

            <button className="px-4 py-2 bg-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl text-white font-semibold">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendSection;
