import React from 'react'

const PetCard = ({ pet }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={pet.image} alt={pet.breed} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pet.id} - {pet.breed}</div>
        
        {/* Flexbox for Gender and Age in the same row */}
        <div className="flex justify-between text-gray-700 text-base mb-2">
          <p>Gene: {pet.gender}</p>
          <p className="ml-4">Age: {pet.age}</p> {/* Added margin for spacing */}
        </div>
        
        {/* Price in bold */}
        <h4 className="font-bold">{pet.price}</h4>
      </div>
    </div>
  )
}

export default PetCard
