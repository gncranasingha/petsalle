import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={product.image} alt={product.breed} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        
        {/* Flexbox for Gender and Age in the same row */}
        <div className="flex justify-between text-gray-700 text-base mb-2">
          <p>Product: {product.product}</p>
          <p className="ml-4">Size: {product.size}</p> {/* Added margin for spacing */}
        </div>
        
        {/* Price in bold */}
        <h4 className="font-bold">{product.price}</h4>
      </div>
    </div>
  )
}

export default ProductCard
