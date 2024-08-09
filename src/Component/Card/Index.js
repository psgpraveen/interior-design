import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}` : "http://localhost:5000";  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.'); // Set error message
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div id='Feature' className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
<h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text shadow-lg rounded-lg p-4">
  INTERIOR GALLERY
</h2>


      {error && <div className="text-red-600 mb-4">{error}</div>} {/* Display error message if any */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img
                src={`data:image/jpeg;base64,${product.ProductImage}`} // Ensure this matches the format of the image
                alt={product.ProductName}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.ProductName}</h3>
              <p className="text-gray-600 mt-2">{product.Description}</p>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">₹ {product.Price}</h4>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
