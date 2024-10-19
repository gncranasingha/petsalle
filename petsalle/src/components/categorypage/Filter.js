import React, { useState } from 'react';

const Filter = () => {
  
  const [selectedGender, setSelectedGender] = useState(''); 
  const [selectedColor, setSelectedColor] = useState(''); 
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [selectedBreed, setSelectedBreed] = useState(''); 

  
  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value); 
  };

 
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value); 
  };

  
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({ ...priceRange, [name]: value });
  };

  
  const handleBreedChange = (e) => {
    setSelectedBreed(e.target.value); 
  };

  return (
    <div className="p-4 ">
       <h3 className="text-xl font-bold mb-2">Filter</h3>

      
      <div>
        <h3 className="font-semibold mb-2">Gender</h3>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            value="Male"
            checked={selectedGender === 'Male'}
            onChange={handleGenderChange}
            className="mr-2"
          />
          Male
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Female"
            checked={selectedGender === 'Female'}
            onChange={handleGenderChange}
            className="mr-2"
          />
          Female
        </label>
      </div>

      <hr className="my-4" /> 

      
      <div>
        <h3 className="font-semibold mb-2">Color</h3>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            value="Black"
            checked={selectedColor === 'Black'}
            onChange={handleColorChange}
            className="mr-2"
          />
          Black
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            value="White"
            checked={selectedColor === 'White'}
            onChange={handleColorChange}
            className="mr-2"
          />
          White
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Brown"
            checked={selectedColor === 'Brown'}
            onChange={handleColorChange}
            className="mr-2"
          />
          Brown
        </label>
      </div>

      <hr className="my-4" /> 

      
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="flex space-x-4">
          <input
            type="number"
            name="min"
            value={priceRange.min}
            onChange={handlePriceChange}
            placeholder="Min"
            className="border rounded p-1 w-full"
          />
          <input
            type="number"
            name="max"
            value={priceRange.max}
            onChange={handlePriceChange}
            placeholder="Max"
            className="border rounded p-1 w-full"
          />
        </div>
      </div>

      <hr className="my-4" /> 
      <div>
        <h3 className="font-semibold mb-2">Breed Size</h3>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            value="Small"
            checked={selectedBreed === 'Small'}
            onChange={handleBreedChange}
            className="mr-2"
          />
          Small
        </label>
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            value="Medium"
            checked={selectedBreed === 'Medium'}
            onChange={handleBreedChange}
            className="mr-2"
          />
          Medium
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Large"
            checked={selectedBreed === 'Large'}
            onChange={handleBreedChange}
            className="mr-2"
          />
          Large
        </label>
      </div>
    </div>
  );
};

export default Filter;
