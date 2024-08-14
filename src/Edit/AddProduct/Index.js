import React, { useState } from 'react';
import axios from 'axios';
import Compressor from 'compressorjs';

const Index = () => {
  // State for form inputs
  const [product, setProduct] = useState({
    ProductName: '',
    description: '',
    price: '',
    categories: '',
    imageFile: null,
  });

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
        quality: 0.3, // Adjust quality as needed
        maxWidth: 1024, // Adjust max width if needed
        maxHeight: 1024, // Adjust max height if needed
        success: (compressedFile) => {
          setProduct((prevProduct) => ({
            ...prevProduct,
            imageFile: compressedFile, // Store the file for upload
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
    // Perform validation if needed
    console.log(product);
    if (!product.ProductName || !product.price || !product.categories) {
      alert('Please fill in all required fields.');
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
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Product added:', response.data);
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
    } catch (error) {
      if (error.response && error.response.data === 'Product Already Exists') {
        alert('A product with this name already exists. Please choose a different name.');
      } else {
        console.error('Error adding product:', error);
        alert('An error occurred while adding the product.');
      }
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 mx-auto">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
            Add New Product
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-sm text-gray-600" htmlFor="name">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="ProductName"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={product.ProductName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={product.description}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600" htmlFor="price">
                Price:- (Rs. )
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600" htmlFor="categories">
                Categories
              </label>
              <select
                id="categories"
                name="categories"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={product.categories}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="Living room">Living room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Children's room">Children's room</option>
                <option value="Home office">Home office</option>
                <option value="Interior Designs">Interior Designs</option>
                <option value="Home Design">Home Design</option>
                <option value="Home Transformations">Home Transformations</option>
                <option value="Furniture & Finishes">Furniture & Finishes</option>
                <option value="Home Stylists">Home Stylists</option>
                <option value="Lounge, Parlor, Salon">Lounge, Parlor, Salon</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="text-sm text-gray-600" htmlFor="imageFile">
                Product Image
              </label>
              <input
                type="file"
                id="imageFile"
                name="imageFile"
                accept="image/*"
                capture="environment" // Enables camera capture on mobile devices
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img src={imagePreview} alt="Product Preview" className="mt-4 h-32 w-32 object-cover" />
              )}
            </div>
            <button
              type="submit"
              className="mt-4 flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Index;
