import React, { useState, useEffect } from 'react';
import logo from '../../Img/logo-4.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const location = useLocation();
  const { userData, token } = location.state || {};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animat, SetAnimat] = useState(false)
  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  const navigate = useNavigate();

  const handleFeedbackClick = () => {

    closeMenu();
  };
  const handleProfileClick = () => {
    closeMenu();
    // const token = localStorage.getItem('authToken');
    navigate("/profile", { state: { token, userData } });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }; const checkScreenSize = () => {
    if (window.innerWidth > 1000) {
      SetAnimat(true);
    } else {
      SetAnimat(false);
    }
  }
  useEffect(() => {
    checkScreenSize();
  }, [checkScreenSize])



  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      <section className="py-2 bg-[#007bff] text-white text-right hidden md:block lg:block px-10">
        <p className="text-sm">
          <strong className="mx-3">Address:</strong> Plot No.25-A/G/4, Rd. No.12, Govandi, Mumbai-400 043
          <strong className="mx-3">Contact No:</strong> +91-9930503098 / +91-9022221616
        </p>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
        <a href="/" className="flex items-center" onClick={() => localStorage.removeItem('authToken')}>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={logo}
            alt="Interior Design Logo"
            className="lg:w-16 w-12"
          />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="ml-3 text-xl lg:text-2xl font-extrabold text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Interior Contractors
          </motion.span>
        </a>

        <motion.div
          initial={{ opacity: 0, x: animat ? '-100%' : '0%', scale: 0 }}
          animate={{ opacity: 1, x: '0%', scale: 1 }}
          transition={{
            opacity: { duration: 0.3 },
            x: { type: 'spring', stiffness: 50, damping: 10, duration: 0.5 },
            scale: { type: 'spring', stiffness: 50, damping: 10, duration: 0.5 }
          }}
          id="collapseMenu"
          className={`lg:flex lg:gap-x-5 ${isMenuOpen ? 'block' : 'hidden'} max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleMenuToggle}
            aria-label="Close Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3">
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.5 }}
              className="mb-6 hidden max-lg:block"
            >
              <a href="/">
                <img src={logo} alt="Interior Design Logo" className="w-36" />
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.5 }}
              className="max-lg:border-b max-lg:py-3 px-3"
            >
              <a
                href="/"
                className="hover:text-[#007bff] text-[#007bff] block font-bold text-[20px]"
                onClick={() => {
                  localStorage.removeItem('authToken');
                  closeMenu();
                }}
              >
                Home
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.5 }}
              className="max-lg:border-b max-lg:py-3 px-3"
            >
              <div
                className="hover:text-[#007bff] cursor-pointer text-[#333] block font-bold text-[20px]"
                onClick={() => {
                  handleFeedbackClick();
                  document.getElementById("Feature").scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Categories
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.5 }}
              className="max-lg:border-b max-lg:py-3 px-3"
            >
              <div
                className="hover:text-[#007bff] text-[#333] cursor-pointer block font-bold text-[20px]"
                onClick={() => {
                  closeMenu();
                  document.getElementById("feedback1").scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Feedback
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.5 }}
              className="max-lg:border-b max-lg:py-3 px-3"
            >
              <div
                className="hover:text-[#007bff] text-[#333] cursor-pointer block font-bold text-[20px]"
                onClick={handleProfileClick}
              >
                Profile
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.5 }}
              className="max-lg:border-b max-lg:py-3 px-3"
            >
              <a href="/" onClick={() => {
                localStorage.removeItem('authToken');
                closeMenu();
              }} className="hover:text-[#007bff] text-[#333] block font-bold text-[20px]" >
                Logout
              </a>

            </motion.li>
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className='flex max-lg:ml-auto'>
          <button id="toggleOpen" className='lg:hidden' onClick={handleMenuToggle}>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Index;
