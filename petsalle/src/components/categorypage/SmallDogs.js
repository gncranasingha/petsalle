import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetCard from '../PetCard';


const SmallDogs = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    
    axios.get('https://monitor-backend-rust.vercel.app/api/pets')
      .then(response => {
        setPets(response.data);
      })
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (
    <div className="p-4">
      
      <div className=" justify-between items-center">
      <div className='flex items-center pb-4'>
            <h5 className="text-lg font-semibold mr-2">Small Dog</h5>
            <p className="text-sm">52 puppies</p>
       </div>

      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default SmallDogs;
