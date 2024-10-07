import React from 'react';
import logo from '../../Img/logo.png';
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
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fade}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        <div className="lg:flex lg:items-center">
          <a href="/">
            <img
              src={logo}
              alt="SNK Interior Logo"
              className="w-32"
            />
          </a>
        </div>

        <div className="lg:flex lg:items-center justify-center">
          <ul className="flex space-x-6">
            {/* Facebook Icon */}
            <li>
              <a
                href="https://www.facebook.com/people/SNK-Interior/61565087667001/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-blue-700 hover:scale-125 w-7 h-7 transition-transform duration-200"
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
            <li>
              <a
                href="https://www.instagram.com/snk_interior/?igsh=MXdzMjdibHZtcG54aA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-300 hover:fill-red-700 hover:scale-125 w-7 h-7 transition-transform duration-200"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.317.974.974 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.317 3.608-.974.974-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.317-.974-.974-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.317-3.608C6.517 2.506 7.785 2.225 9.151 2.163c1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.695 0 8.254.013 7.012.072 5.741.132 4.487.422 3.41 1.5c-1.077 1.077-1.367 2.331-1.428 3.602C1.952 6.745 1.938 7.185 1.938 12c0 4.815.014 5.255.072 6.488.061 1.271.351 2.525 1.428 3.602 1.077 1.077 2.331 1.367 3.602 1.428 1.233.059 1.673.072 6.488.072 4.815 0 5.255-.014 6.488-.072 1.271-.061 2.525-.351 3.602-1.428 1.077-1.077 1.367-2.331 1.428-3.602.059-1.233.072-1.673.072-6.488 0-4.815-.014-5.255-.072-6.488-.061-1.271-.351-2.525-1.428-3.602C19.513.422 18.259.132 16.988.072 15.746.013 15.305 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-10.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </a>
            </li>

            {/* LinkedIn Icon */}
            <li>
              <a
                href="https://www.linkedin.com/company/snkinterior/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 hover:fill-blue-700 hover:scale-125 w-7 h-7 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zm-13.94 20H5.16V9h3.13v11zm-1.57-12.55a1.82 1.82 0 110-3.64 1.82 1.82 0 010 3.64zm14.4 12.55h-3.14v-5.62c0-1.34-.02-3.07-1.87-3.07s-2.15 1.46-2.15 2.97v5.72H9.92V9h3.02v1.5h.04a3.31 3.31 0 012.98-1.64c3.19 0 3.77 2.1 3.77 4.83v6.32z" />
                </motion.svg>
              </a>
            </li>
            {/* Twitter Icon */}
            <li>
              <a
                href="https://twitter.com/snk_interior"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-gray-300 hover:fill-blue-500 hover:scale-125 w-7 h-7 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <path d="M23.64 4.56a9.74 9.74 0 01-2.82.78 4.94 4.94 0 002.16-2.72 9.86 9.86 0 01-3.12 1.2 4.92 4.92 0 00-8.4 4.48A13.95 13.95 0 011.64 3.16a4.92 4.92 0 001.52 6.57 4.85 4.85 0 01-2.23-.61v.06a4.92 4.92 0 003.95 4.83 4.9 4.9 0 01-2.22.08 4.92 4.92 0 004.6 3.43A9.87 9.87 0 010 19.54a13.92 13.92 0 007.56 2.22c9.05 0 14-7.5 14-14v-.64a9.94 9.94 0 002.46-2.53z" />
                </motion.svg>
              </a>
            </li>


          </ul>
        </div>

        <div className="lg:flex lg:items-center justify-center">
          <ul className="text-gray-300 space-y-3">
          <li>
              <a variants={fade}

                href="mailto:sabrunnabi@gmail.com" className="text-gray-300 hover:text-white text-sm">
                <motion.h6 initial="initial" variants={fade}
                  whileInView="animate"> Snkinteriorofficial@gmail.com</motion.h6>
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
      </motion.div>

      <div className="lg:flex lg:items-center justify-center">


        <p className='text-gray-300 text-sm mt-10'>© Handcrafted ❤ by <a href='https://psgpraveen.github.io/port/' target='_blank'
          className="hover:underline hover:text-blue-500 mx-1">PsgPraveen & Himanshu</a>
        </p>

      </div>
    </footer>
  );
};

export default Index;
