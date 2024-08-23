import React from 'react';
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

const itemFade = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
};

const WhyChooseUs = () => {
    return (
        <div className="space-y-8 p-8 bg-gray-100 min-h-screen">
            <motion.div
                initial="initial"
                variants={fade}
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10 p-8 bg-white rounded-lg shadow-xl text-gray-800"
            >
                <h2 className="text-3xl font-semibold text-blue-600 uppercase border-b-2 border-blue-500 pb-2">
                    Why Choose Us?
                </h2>
                <ul className="mt-4 list-disc list-inside space-y-2 text-lg leading-relaxed">
                    {['Personalized service tailored to your vision and needs.',
                        'Expertise in renovating single rooms or redesigning entire homes.',
                        'High-quality results that exceed expectations.',
                        'Attention to detail from concept to completion.',
                        'Functional and stylish designs that match your lifestyle.']
                        .map((text, index) => (
                            <motion.li
                                key={index}
                                initial="initial"
                                animate="animate"
                                variants={itemFade}
                                transition={{ delay: index * 0.1 }} // Stagger the animation
                            >
                                {text}
                            </motion.li>
                        ))}
                </ul>
            </motion.div>

            <motion.div
                initial="initial"
                variants={fade}
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10 p-8 bg-white rounded-lg shadow-xl text-gray-800"
            >
                <h2 className="text-3xl font-semibold text-blue-600 uppercase border-b-2 border-blue-500 pb-2">
                    Our Expertise
                </h2>
                <ul className="mt-4 list-disc list-inside space-y-2 text-lg leading-relaxed">
                    {['Years of experience in the interior design industry.',
                        'A keen eye for detail and understanding of design trends.',
                        'Up-to-date with modern design technologies and trends.',
                        'Ability to create spaces that are both functional and aesthetically pleasing.',
                        'Expertise in selecting color palettes and furniture pieces.']
                        .map((text, index) => (
                            <motion.li
                                key={index}
                                initial="initial"
                                animate="animate"
                                variants={itemFade}
                                transition={{ delay: index * 0.1 }} // Stagger the animation
                            >
                                {text}
                            </motion.li>
                        ))}
                </ul>
            </motion.div>

            <motion.div
                initial="initial"
                variants={fade}
                whileInView="animate"
                viewport={{ once: true }}
                className="relative z-10 p-8 bg-white rounded-lg shadow-xl text-gray-800"
            >
                <h2 className="text-3xl font-semibold text-blue-600 uppercase border-b-2 border-blue-500 pb-2">
                    Customer Satisfaction
                </h2>
                <ul className="mt-4 list-disc list-inside space-y-2 text-lg leading-relaxed">
                    {['Client satisfaction is our top priority.',
                        'Building long-term relationships through exceptional service.',
                        'Exceeding client expectations with high-quality results.',
                        'Providing a seamless experience from start to finish.',
                        'Satisfaction guarantee on all our work.']
                        .map((text, index) => (
                            <motion.li
                                key={index}
                                initial="initial"
                                animate="animate"
                                variants={itemFade}
                                transition={{ delay: index * 0.1 }} // Stagger the animation
                            >
                                {text}
                            </motion.li>
                        ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default WhyChooseUs;
