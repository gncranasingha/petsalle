import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerCard from '../CustomerCard'

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  
  useEffect(() => {
    axios.get('https://monitor-backend-rust.vercel.app/api/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error('Error fetching customer data:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#003459]">Our Lovly Customers</h1>
      <div className="flex space-x-4 overflow-x-auto">
        {customers.map(customer => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default Customer;
