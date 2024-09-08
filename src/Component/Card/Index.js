import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const categories = [
  { label: 'All Categories', value: '', icon: '🌐' },
  { label: 'Living room', value: 'Living room', icon: '🛋️' },
  { label: 'Kitchen', value: 'Kitchen', icon: '🍳' },
  { label: 'Bedroom', value: 'Bedroom', icon: '🛏️' },
  { label: 'Bathroom', value: 'Bathroom', icon: '🛁' },
  { label: 'Children\'s room', value: 'Children\'s room', icon: '🧸' },
  { label: 'Office', value: 'Home office', icon: '💼' },
  { label: 'Interior Designs', value: 'Interior Designs', icon: '🎨' },
  { label: 'Home Design', value: 'Home Design', icon: '🏡' },
  { label: 'Furniture & Finishes', value: 'Furniture & Finishes', icon: '🛋️' },
  { label: 'Lounge, Parlor, Salon', value: 'Lounge, Parlor, Salon', icon: '💇' },
  { label: 'Other', value: 'other', icon: '🌐' },

];

const fade = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1 },
  },
};

const CategorySelector = ({ category, setCategory ,scrollToFeatured ,setPage}) => {
  return (
    <div className="grid grid-cols-3  sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-6 gap-4 py-8">
      {categories.map((cat) => (
        <motion.div
          key={cat.value}
          onClick={() =>{ setCategory(cat.value); setPage(1) ;scrollToFeatured();}}
          className={`cursor-pointer text-center p-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-blue-200
          ${category === cat.value ? 'bg-blue-200' : 'bg-gray-100'}`}
          style={{ transition: 'transform 0.3s, background-color 0.3s' }}
          initial="initial"
          whileHover={{ scale: 1.1 }}
          animate={{ scale: 1 }}
        >
          <div className="text-4xl mb-2 ">{cat.icon}</div>
          <h3 className="text-xs font-bold text-gray-700">{cat.label}</h3>
        </motion.div>
      ))}
    </div>
  );
};

const Index = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}` : "http://localhost:5000";

  const fetchProducts = async () => {
    try {
      setLoading(true);
     
      const response = await axios.get(url, {
        params: {
          category: category,
          page: page
        }
      });
      setProducts(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products.');
    }
  };

  useEffect(() => {
    fetchProducts();
    
  }, [category, page]);
  const scrollToFeatured = () => {
    document.getElementById("feat").scrollIntoView({ behavior: 'smooth' });
  };
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);scrollToFeatured();
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));scrollToFeatured();
  };

  return (
    <div id='Feature' className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <motion.h2
        variants={fade}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        className="text-4xl font-extrabold text-center text-gray-800 mb-12 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text shadow-lg rounded-lg p-4"
      >
        INTERIOR GALLERY
      </motion.h2>
      <CategorySelector category={category} setCategory={setCategory} setPage={setPage} scrollToFeatured={scrollToFeatured} />
      <motion.h3
        variants={fade} id='feat'
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        className="text-2xl font-bold text-center mt-8 mb-4 p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text shadow-lg rounded-lg"
      >
        Featured Products
      </motion.h3>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
          <div className="text-center text-gray-700 font-bold text-xl ml-4">
            Loading...
          </div>
        </div>
      ) : error ? (
        <div className="text-red-600 mb-4">{error}</div>
      ) : products.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <div className="text-red-500 text-4xl font-bold mb-4 animate-bounce">
            😕
          </div>
          <div className="text-gray-700 font-semibold text-xl">
            Data not found
          </div>
          <div className="text-gray-500 mt-2">
            Sorry, we couldn't find the data you're looking for. Please try again later.
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1  overflow-hidden sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <motion.div
                key={product._id}
                className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
                variants={fade}
                initial="initial"
                whileInView="animate"
              >
                <div className="w-full aspect-w-16 overflow-hidden aspect-h-8 lg:h-80">
                  <motion.img
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.3 }}
                    variants={fade}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        
        </>
      )}  <div className="flex justify-center mt-8 gap-4">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Back
      </button>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Next
      </button>
    </div>
    </div>
  );
};

export default Index;
