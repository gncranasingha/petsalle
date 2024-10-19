import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../PetCard';
import { AiOutlineRight } from "react-icons/ai";

const PetKnowledge = () => {
  const [pets, setPets] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
   
    axios.get('https://monitor-backend-rust.vercel.app/api/pets')
      .then(response => {
        setPets(response.data);
      })
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  
  const handleViewMore = () => {
    setShowAll(true);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg font-semibold">What's new?</h5>
          <h1 className="text-2xl font-bold pb-5">Take A Look At Some Of Our Pets</h1>
        </div>
        <button 
          onClick={handleViewMore} 
          className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center"
        >
          View More <AiOutlineRight className="ml-2" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pets.slice(0, showAll ? pets.length : 3).map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default PetKnowledge;
