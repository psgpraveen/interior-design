import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Index = () => {
  const [products, setProducts] = useState([]);
  const url=process.env.FetchUrl || "http://localhost:5000/signin"

  const fetchProducts = async () => {
    try {
      const response = await axios.get(url); // Use GET request
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(url+`/products/${id}`);
      // Filter out the deleted product from the state
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div id='Feature' className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Feature</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id} // Use unique key from the product data
            className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img
                src={`data:image/jpeg;base64,${product.ProductImage}`} // Use base64 image string
                alt={product.ProductName}
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.ProductName}</h3>
              <p className="text-gray-600 mt-2">{product.Description}</p>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">₹ {product.Price}</h4>

                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
              <button
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                onClick={() => deleteProduct(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
