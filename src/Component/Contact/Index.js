import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion"


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
const Index = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: ''
  });
  const [loading, setLoading] = useState(false);
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}feedback` : "http://localhost:5000/feedback";

  // Update state when form values change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const { Name, Email, Message } = formData; 
    try {
      if (!Name || !Email || !Message) {
        alert('Please fill All Field');
      } else {
        
        await axios.post(url, formData);
        alert('Feedback submitted successfully!');
        setFormData({
          Name: '',
          Email: '',
          Message: ''
        });
      }
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact' className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Plot%20No.25-A/G/4,%20Rd.%20No.12,%20Govandi,%20Mumbai-400%20043&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <motion.h2 variants={fade}
                initial="initial"
                whileInView="animate" viewport={{ once: true }} className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</motion.h2>
              <motion.p variants={fade}
                initial="initial"
                whileInView="animate" viewport={{ once: true }} className="mt-1">Plot No.25-A/G/4, Rd. No.12, Govandi, Mumbai-400 043</motion.p>
            </div>
            <motion.div variants={fade}
              initial="initial"
              whileInView="animate" viewport={{ once: true }} className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href="mailto:sabrunnabi@gmail.com" className="text-blue-500 leading-relaxed">sabrunnabi@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">+91-9930503098 / +91-9022221616</p>
            </motion.div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
          <motion.p variants={fade}
            initial="initial"
            whileInView="animate" viewport={{ once: true }} className="leading-relaxed mb-5 text-gray-600">Your feedback is important to us. Please share your thoughts!</motion.p>
          <form onSubmit={handleSubmit}>

            <motion.div variants={fade}
              initial="initial"
              whileInView="animate" className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" name="Name" value={formData.Name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </motion.div>
            <motion.div variants={fade}
              initial="initial"
              whileInView="animate" className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="Email" value={formData.Email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </motion.div>
            <motion.div variants={fade}
              initial="initial"
              whileInView="animate" className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="Message" value={formData.Message} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </motion.div>
            <motion.button variants={fade}
              initial="initial"
              whileInView="animate" type="submit" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" disabled={loading}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 13h2v-6h-2v6zm0-8h2V7h-2v2z" /></svg>
                    Loading...
                  </>
                ) : (
                  'Send Feedback'
                )}</motion.button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Thank you for sharing your feedback with us!</p>
        </div>
      </div>
    </section>
  )
}

export default Index;
