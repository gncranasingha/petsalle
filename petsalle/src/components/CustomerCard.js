import React from 'react';

const CustomerCard = ({ customer }) => {
  return (
    <div className="min-w-[200px] h-[300px] rounded-lg overflow-hidden shadow-lg relative">
      
      <img
        src={customer.image} 
        alt={customer.name}
        className="w-full h-full object-cover"
      />
      
      
      
    </div>
  );
};

export default CustomerCard;
