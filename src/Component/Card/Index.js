import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}` : "http://localhost:5000";

  const fetchProducts = async () => {

    try {
      setLoading(true)
      const response = await axios.get(url, {
        params: {
          category: category
        }
      });
      setProducts(response.data);
      setLoading(false)
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]); // Fetch products when category changes

  return (
    <div id='Feature' className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text shadow-lg rounded-lg p-4">
        INTERIOR GALLERY
      </h2>

      <div className="mb-6 flex justify-center">
        <div className="relative inline-block w-full sm:w-64">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none text-gray-700 font-semibold bg-white bg-gradient-to-r from-blue-50 to-white transition-all duration-300"
          >
            <option value="">All Categories</option>
            <option value="Living room">🛋️ Living room</option>
            <option value="Kitchen">🍳 Kitchen</option>
            <option value="Bedroom">🛏️ Bedroom</option>
            <option value="Bathroom">🛁 Bathroom</option>
            <option value="Children's room">🧸 Children's room</option>
            <option value="Home office">💼 Home office</option>
            <option value="Interior Designs">🎨 Interior Designs</option>
            <option value="Home Design">🏡 Home Design</option>
            <option value="Home Transformations">🔄 Home Transformations</option>
            <option value="Furniture & Finishes">🛋️ Furniture & Finishes</option>
            <option value="Home Stylists">💅 Home Stylists</option>
            <option value="Lounge, Parlor, Salon">💇 Lounge, Parlor, Salon</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <div className="text-center text-gray-700 font-bold text-xl ml-4">
            Loading...
          </div>
        </div>
      ) : error ? <div className="text-red-600 mb-4">{error}</div> : products.length===0?<div className="flex flex-col items-center justify-center h-64 text-center">
      <div className="text-red-500 text-4xl font-bold mb-4">
        😕
      </div>
      <div className="text-gray-700 font-semibold text-xl">
        Data not found
      </div>
      <div className="text-gray-500 mt-2">
        Sorry, we couldn't find the data you're looking for. Please try again later.
      </div>
    </div>
    :

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
            >
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <img
                  src={`data:image/jpeg;base64,${product.ProductImage}`}
                  alt={product.ProductName}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{product.ProductName}</h3>
                <p className="text-gray-600 mt-2">{product.Description}</p>
                <p className="text-gray-600 mt-2">Category: {product.categories}</p>

                <div className="mt-4 flex items-center flex-wrap gap-2">
                  <h4 className="text-lg font-bold text-gray-800">₹ {product.Price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>}
    </div>
  );
};

export default Index;
