import React, { useState ,useRef } from 'react';
import axios from 'axios';
import Compressor from 'compressorjs';

const Index = ({fetchProducts}) => {
  // State for form inputs
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    ProductName: '',
    description: '',
    price: '',
    categories: '',
    imageFile: null,
  });
  const fileInputRef = useRef(null);
  const url = process.env.REACT_APP_FETCH_URL
    ? `${process.env.REACT_APP_FETCH_URL}addproduct`
    : 'http://localhost:5000/addproduct';

  const [imagePreview, setImagePreview] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new Compressor(file, {
        quality: 0.3,
        maxWidth: 1024,
        maxHeight: 1024,
        success: (compressedFile) => {
          setProduct((prevProduct) => ({
            ...prevProduct,
            imageFile: compressedFile,
          }));

          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(compressedFile);
        },
        error(err) {
          console.error('Image compression error:', err);
        },
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!product.ProductName || !product.price || !product.categories) {
      alert('Please fill in all required fields.');
      setLoading(false);
      return;
    }
    const formData = new FormData();
    formData.append('ProductName', product.ProductName);
    formData.append('Description', product.description);
    formData.append('Price', product.price);
    formData.append('categories', product.categories);
    if (product.imageFile) {
      formData.append('ProductImage', product.imageFile);
    }
    // Submit form data to the server
    try {
       await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Product added successfully');
      // Reset form fields
      setProduct({
        ProductName: '',
        description: '',
        price: '',
        categories: '',
        imageFile: null,
      });
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset the file input
      }
      fetchProducts();
    } catch (error) {
      if (error.response && error.response.data === 'Product Already Exists') {
        alert('A product with this name already exists. Please choose a different name.');
      } else {
        console.error('Error adding product:', error);
        alert('An error occurred while adding the product.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 mx-auto">
          <h1 className="text-gray-900 text-4xl title-font font-bold mb-8 text-center">
            Add New Product
          </h1>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700" htmlFor="name">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="ProductName"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                value={product.ProductName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700" htmlFor="price">
                Price (Rs.)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700" htmlFor="categories">
                Categories
              </label>
              <select
                id="categories"
                name="categories"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                value={product.categories}
                onChange={handleChange}
                required
              >
                 <option value="">Select a category</option>
                <option value="Living room">🛋️ Living room</option>
                <option value="Kitchen">🍽️ Kitchen</option>
                <option value="Bedroom">🛏️ Bedroom</option>
                <option value="Bathroom">🚿 Bathroom</option>
                <option value="Children's room">🧸 Children's room</option>
                <option value="Home office">💼 Office</option>
                <option value="Interior Designs">🎨 Interior Designs</option>
                <option value="Home Design">🏠Home Design</option>
                <option value="Furniture & Finishes">🛋️ Furniture & Finishes</option>
                <option value="Lounge, Parlor, Salon">💇 Lounge, Parlor, Salon</option>
                <option value="other">🌐 Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium text-gray-700" htmlFor="imageFile">
                Product Image
              </label>
              <input
                type="file"
                id="imageFile"
                ref={fileInputRef}
                name="imageFile"
                accept="image/*"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Product Preview"
                  className="mt-4 h-32 w-32 object-cover border-2 border-gray-200 rounded-lg shadow-md"
                />
              )}
            </div>
            <button
              type="submit"
              className={`mt-4 flex items-center justify-center text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded transition ease-in-out duration-300 ${
                loading ? 'cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
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
                'Add Product'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Index;
