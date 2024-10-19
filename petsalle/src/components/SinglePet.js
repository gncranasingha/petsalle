import React, { useState } from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import Dog from '../assets/dog.jpeg';
import Dog1 from '../assets/dog1.jpg';
import Dog2 from '../assets/dog2.jpg';
import Dog3 from '../assets/dog3.jpeg';
import Dog4 from '../assets/dog4.jpg';
import DogIcon from '../assets/d.svg';

const SinglePet = () => {
  
  const pet = {
    id: 1,
    breed: 'Golden Retriever',
    image: Dog, 
    otherImages: [
      Dog1,
      Dog2,
      Dog3,
      Dog4,
    ], 
    gender: 'Male',
    age: '2 years',
    price: '1200 ',
    description: 'A friendly and loyal companion. Great with kids and loves outdoor activities!',
  };


  const [selectedImage, setSelectedImage] = useState(pet.image);

  
  const handleImageClick = (image) => {
    setSelectedImage(image); 
  };

  return (
    <div className="container mx-auto border rounded-2xl p-4">
      
   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        
        <div>
          {/* Fixed size for the main image */}
          <div className="w-full h-[500px]"> {/* Set a fixed height of 500px */}
            <img className="w-full h-full object-cover" src={selectedImage} alt={pet.breed} />
          </div>
          
          {/* Thumbnails below the main image with larger size */}
          <div className="flex space-x-4 mt-4">
            {pet.otherImages.map((image, index) => (
              <img
                key={index}
                className="w-24 h-24 object-cover cursor-pointer rounded-lg border-2 border-gray-300" 
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
          
          <div class="flex items-center bg-red-200 text-[#003459] text-sm font-bold px-4 py-3 mt-5" role="alert">
          <img src={DogIcon} alt="Dog Icon" className="w-4 h-4" />
 <p>100% health guarantee for pets </p>
          </div>
        </div>

        {/* Right column for pet details */}
        <div className="space-y-4">
        <p className="inline-flex items-center space-x-2 pb-5 text-gray-600">
          <span>Category</span> 
          <AiOutlineRight />
          <span>Dog</span> 
          <AiOutlineRight />
          <span>Small Dog</span>
        </p>
        <p>SKU #1000078</p>
        <h1 className="text-2xl text-[#003459] font-bold">{pet.breed}</h1>
        <h4 className="text-2xl text-[#003459] font-bold">{pet.price}VND</h4>
          
          <div className="flex space-x-4">
          <button className="px-4 py-2 bg-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl text-white font-semibold">
            Contact us
          </button>
          <button className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center">
          <RiMessage2Line className="ml-2" />
            Chat with Monito
          </button>

          
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className='text-[#74777a] '>SKU:</p>
            <p className='text-[#74777a]'>#1000078</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className='text-[#74777a] '>Gender:</p>
            <p className='text-[#74777a]'>{pet.gender}</p>
          </div>
          <hr />

          <div className="flex justify-between items-center">
            <p className='text-[#74777a] '>Age:</p>
            <p className='text-[#74777a]'>{pet.age}</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className='text-[#74777a]'>Size:</p>
            <p className='text-[#74777a]'>Small</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className='text-[#74777a]'>Color:</p>
            <p className='text-[#74777a]'>Appricot & Ton</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className='text-[#74777a]'>Vaccinated:</p>
            <p className='text-[#74777a]'>Yes</p>
          </div>
          <hr />
         
          <div className="flex justify-between items-center">
            <p className='text-[#74777a]'>Location:</p>
            <p className='text-[#74777a]'>Colombo 3</p>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <p className='text-[#74777a]'>Published Date:</p>
            <p className='text-[#74777a]'>12-Oct-2024</p>
          </div>
          <hr />

          <div className="flex justify-between items-center">
            <p className="text-gray-700">Description:</p>
            <p className="text-gray-700">{pet.description}</p>
          </div>
          <hr />
        </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePet;
