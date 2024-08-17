import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddProduct from '../AddProduct/Index'
const Index = () => {
  const [category, setCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingProductId, setDeletingProductId] = useState(null);
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}` : "http://localhost:5000";

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: {
          category: category 
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
    setDeletingProductId(id);
    try {
      await axios.delete(`${url}products/${id}`);

      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    } finally {
      setDeletingProductId(null);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  return (<> <AddProduct fetchProducts={fetchProducts} />
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
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z" /></svg>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center my-8">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
        </div>
      ) : error ? <div className="text-center text-red-600">{error}</div> : products.length === 0 ? <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="text-red-500 text-4xl font-bold mb-4">
          😕
        </div>
        <div className="text-gray-700 font-semibold text-xl">
          Data not found
        </div>
        <div className="text-gray-500 mt-2">
          Sorry, we couldn't find the data you're looking for. Please try again later.
        </div>
      </div> :

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              <div className="relative w-full h-60">
                <img
                  src={`data:image/jpeg;base64,${product.ProductImage}`}
                  alt={product.ProductName}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold text-gray-800">₹ {product.Price}</h4>
                  <button
                    className={`px-3 py-1 text-white rounded ${deletingProductId === product._id
                        ? 'bg-red-600 cursor-not-allowed'
                        : 'bg-red-600 hover:bg-red-700'
                      }`}
                    onClick={() => deleteProduct(product._id)}
                    disabled={deletingProductId === product._id}
                  >
                    {deletingProductId === product._id ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    ) : (
                      'Delete'
                    )}
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{product.ProductName}</h3>
                <p className="text-gray-600 mt-2">{product.Description}</p>
                <p className="text-gray-600 mt-2">Category: {product.categories}</p>
              </div>
            </div>
          ))}
        </div>}
    </div></>
  );
};

export default Index;
