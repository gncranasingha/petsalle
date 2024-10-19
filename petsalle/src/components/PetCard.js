
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    
    navigate(`/category/dog/smalldog/${pet.id}`, { state: { pet } });
  };

  return (
    <div onClick={handleClick} className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">
      <img className="w-full" src={pet.image} alt={pet.breed} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pet.id} - {pet.breed}</div>
        <div className="flex justify-between text-gray-700 text-base mb-2">
          <p>Gender: {pet.gender}</p>
          <p className="ml-4">Age: {pet.age}</p>
        </div>
        <h4 className="font-bold">{pet.price}</h4>
      </div>
    </div>
  );
};

export default PetCard;
