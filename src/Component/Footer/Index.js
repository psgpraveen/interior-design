import React from 'react'
import logo from '../../Img/logo-4.png'
import { motion } from "framer-motion";

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
    <footer className="bg-gray-900 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <a href="/interior-design/">
            <img
              src={logo}
              alt="logo"
              className="w-32 filter invert brightness-0"
            />
          </a>
        </div>

        <div className="lg:flex lg:items-center justify-center">
          <ul className="flex space-x-6">
            {/* Facebook Icon */}
            <li >
              <a
                href="https://www.facebook.com/people/SNK-Interior/61565087667001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <motion.svg initial="initial" variants={fade}
              whileInView="animate"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </a>
            </li>

            {/* Instagram Icon */}
            <motion.li initial="initial" 
              whileInView="animate" variants={fade}> 
              <a
                href="https://www.instagram.com/snk_interior/?igsh=MXdzMjdibHZtcG54aA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-white w-7 h-7 transition-colors duration-200"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.974.974 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.974.974-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.974-.974-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608C6.517 2.506 7.785 2.225 9.151 2.163c1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.695 0 8.254.013 7.012.072 5.741.132 4.487.422 3.41 1.5c-1.077 1.077-1.367 2.331-1.428 3.602C1.952 6.745 1.938 7.185 1.938 12c0 4.815.014 5.255.072 6.488.061 1.271.351 2.525 1.428 3.602 1.077 1.077 2.331 1.367 3.602 1.428 1.233.059 1.673.072 6.488.072 4.815 0 5.255-.014 6.488-.072 1.271-.061 2.525-.351 3.602-1.428 1.077-1.077 1.367-2.331 1.428-3.602.059-1.233.072-1.673.072-6.488 0-4.815-.014-5.255-.072-6.488-.061-1.271-.351-2.525-1.428-3.602C19.513.422 18.259.132 16.988.072 15.746.013 15.305 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-10.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.li>
          </ul>
        </div>


        <div>
          <motion.h4 variants={fade}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }} className="text-lg font-semibold mb-6 text-white">Contact Us</motion.h4>
          <ul className="space-y-4">
            <li>
              <a variants={fade}

                href="mailto:sabrunnabi@gmail.com" className="text-gray-300 hover:text-white text-sm">
                <motion.h6 initial="initial" variants={fade}
                  whileInView="animate"> sabrunnabi@gmail.com</motion.h6>
              </a>
            </li>
            <li>
              <motion.h5 initial="initial"
                whileInView="animate" variants={fade} className="text-gray-300 hover:text-white text-sm">+91-9930503098 / +91-9022221616</motion.h5>
            </li>
            <li>
              <a href="javascript:void(0)" target='_blank' className="text-gray-300 hover:text-white text-sm"><motion.h6 variants={fade} initial='initial' whileInView='animate'>Plot No.25-A/G/4, Rd. No.12, Govandi, Mumbai-400 043</motion.h6></a>
            </li>
          </ul>
        </div>


      </div>

      <p className='text-gray-300 text-sm mt-10'>© Handcrafted ❤ by <a href='https://psgpraveen.github.io/port/' target='_blank'
        className="hover:underline mx-1">PsgPraveen & Himanshu</a>
      </p>
    </footer>
  )
}

export default Index