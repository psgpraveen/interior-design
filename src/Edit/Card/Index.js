import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}` : "http://localhost:5000";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: {
          category: category // Send category as a query parameter
        }
      });
      setProducts(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${url}/products/${id}`);
      // Filter out the deleted product from the state
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
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
            <option value="" className="text-gray-400">All Categories</option>
            <option value="Living room" className="text-gray-700">🛋️ Living room</option>
            <option value="Kitchen" className="text-gray-700">🍳 Kitchen</option>
            <option value="Bedroom" className="text-gray-700">🛏️ Bedroom</option>
            <option value="Bathroom" className="text-gray-700">🛁 Bathroom</option>
            <option value="Children's room" className="text-gray-700">🧸 Children's room</option>
            <option value="Home office" className="text-gray-700">💼 Home office</option>
            <option value="Interior Designs" className="text-gray-700">🎨 Interior Designs</option>
            <option value="Home Design" className="text-gray-700">🏡 Home Design</option>
            <option value="Home Transformations" className="text-gray-700">🔄 Home Transformations</option>
            <option value="Furniture & Finishes" className="text-gray-700">🛋️ Furniture & Finishes</option>
            <option value="Home Stylists" className="text-gray-700">💅 Home Stylists</option>
            <option value="Lounge, Parlor, Salon" className="text-gray-700">💇 Lounge, Parlor, Salon</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
          </div>
        </div>
      </div>

      {loading && <div className="text-center text-gray-600">Loading products...</div>}
      {error && <div className="text-center text-red-600">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <div className="relative w-full h-60"> {/* Fixed height for the image container */}
              <img
                src={`data:image/jpeg;base64,${product.ProductImage}`} // Use base64 image string
                alt={product.ProductName}
                className="h-full w-full object-cover" // Ensure image covers the container
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-bold text-gray-800">₹ {product.Price}</h4>
                <button
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => deleteProduct(product._id)}
                >
                  Delete
                </button>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mt-2">{product.ProductName}</h3>
              <p className="text-gray-600 mt-2">{product.Description}</p>
              <p className="text-gray-600 mt-2">Category: {product.categories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
