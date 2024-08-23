import React from 'react';
import Img1 from '../../Img/1.jpg';
import { motion } from 'framer-motion';

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

const imageFade = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 0.9, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } },
};

const Index = () => {
  return (
    <div id="intro" className="bg-gray-800 w-full font-[sans-serif] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-gray-900 to-gray-700"></div>

      <div className="relative z-10 grid md:grid-cols-2 items-center md:max-h-[36rem] overflow-hidden">
        <div className="p-8">
          <motion.h1
            initial="initial"
            variants={fade}
            whileInView="animate"
            viewport={{ once: true }}
            className="sm:text-5xl text-3xl font-bold text-white"
          >
            Your Home <span className="text-orange-400">Our Design</span>
          </motion.h1>
          <motion.p
            initial="initial"
            variants={fade}
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-300"
          >
            Transform your living room, kitchen, bedroom, bathroom, children's room, and home office with our customized interior design services.
          </motion.p>
          <motion.p
            variants={fade}
            initial="initial"
            animate="animate"
            className="mt-2 text-lg text-gray-300"
          >
            From home transformations to furniture & finishes, our expert stylists bring your dream spaces—like lounges, parlors, and salons—to life.
          </motion.p>
          <motion.button
            initial="initial"
            variants={fade}
            whileInView="animate"
            type="button"
            className="px-8 py-3 mt-8 rounded-md text-white text-lg tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600 shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <a href="#contact">Contact</a>
          </motion.button>
          
        </div>

        <motion.div
          initial="initial"
          variants={imageFade}
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={Img1}
            className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-lg"
            alt="Interior Design Example"
          />
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </motion.div>
      </div>



    </div>
  );
};

export default Index;
