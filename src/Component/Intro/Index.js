import React from 'react'
import Img1 from '../../Img/1.jpg'
import {motion } from 'framer-motion'

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
  return (
    <div id='intro' class="bg-gray-800 w-full font-[sans-serif]">
      <div class="grid md:grid-cols-2 items-center md:max-h-[36rem] overflow-hidden ">
        <div class="p-8">
          <motion.h1  initial="initial" variants={fade}
                whileInView="animate" viewport={{ once: true }}  class="sm:text-4xl text-2xl font-bold text-white">Your Home <span class="text-orange-400">Our Design</span></motion.h1>
          <motion.p initial="initial" variants={fade}
                whileInView="animate" viewport={{ once: true }}  class="mt-4 text-sm text-gray-300">Transform your living room, kitchen, bedroom, bathroom, children's room, and home office with our customized interior design services.</motion.p>
          <motion.p variants={fade} initial='initial' animate='animate' class="mt-2 text-sm text-gray-300">From home transformations to furniture & finishes, our expert stylists bring your dream spaces—like lounges, parlors, and salons—to life.</motion.p>
          <motion.button initial="initial" variants={fade}
                whileInView="animate"  type="button"
            class="px-6 py-3 mt-8 rounded-md text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600 "><a href='#contact'>Contact</a> </motion.button>
        </div>
        <img src={Img1} class="w-full  object-cover h-full opacity-45  2xl:p-[0 0 0 9rem] -mt-[2rem] pl-[10rem] shrink-0 " />
      </div>
    </div>)
}

export default Index