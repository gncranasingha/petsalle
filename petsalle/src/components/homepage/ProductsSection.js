import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import { AiOutlineRight } from "react-icons/ai";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false); // State to control the "View More" behavior

  useEffect(() => {
    // Fetch the product data from the API using Axios
    axios.get('https://monitor-backend-rust.vercel.app/api/products')
      .then(response => {
        setProducts(response.data); // Store all products
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Function to handle "View More" button click
  const handleViewMore = () => {
    setShowAll(true); // Show all products when clicked
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-lg font-semibold">What's new?</h5>
          <h1 className="text-2xl font-bold pb-5">Take A Look At Some Of Our Products</h1>
        </div>
        {!showAll && (
          <button 
            onClick={handleViewMore} // Add onClick to trigger showing all products
            className="px-4 py-2 bg-transparent text-[#003459] font-semibold border border-[#003459] hover:bg-white hover:text-[#003459] rounded-3xl flex items-center"
          >
            View More <AiOutlineRight className="ml-2" />
          </button>
        )}
      </div>
      
      {/* Grid layout for products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, showAll ? products.length : 3).map(product => ( // Initially show only 3
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsSection;
