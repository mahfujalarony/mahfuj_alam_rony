"use client";

import React from 'react';
import Image from 'next/image';
import { Montserrat, Michroma } from 'next/font/google';
import { motion } from 'framer-motion';

const montserrat = Montserrat({ subsets: ['latin'] });
const michroma = Michroma({ weight: '400', subsets: ['latin'] });

const About = () => {
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center px-4">
            <motion.div 
              className="rotating-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/rony.jpg" 
                alt="Profile Picture" 
                width={350}
                height={350}
                className="profile-image rounded-lg object-cover"
                priority
              />
            </motion.div>
          </div>
          
          {/* Text Section */}
          <div className="w-full md:w-2/3 text-white px-4">
            <motion.h1 
              className={`text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent ${michroma.className}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h1>

            <motion.div 
              className={`${montserrat.className} space-y-4 md:space-y-6 text-lg md:text-xl leading-relaxed`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
            >
              <motion.p 
                className="text-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Hello! I&apos;m a passionate frontend developer currently pursuing Computer Science &amp; Technology at Kishoregonj Polytechnic Institute.
              </motion.p>
              
              <motion.p 
                className="text-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                I specialize in building modern, high-performance web applications using React.js and Next.js. For state management and enhanced performance, I utilize tools like Context API, Redux Toolkit, and React Query.
              </motion.p>

              <motion.p 
                className="text-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                I love creating interactive UIs with libraries like Material UI, Tailwind CSS, and Framer Motion. Beyond frontend, I&apos;m also proficient in backend development with Node.js, Express.js, and MongoDB to build full-stack solutions.
              </motion.p>
              
              <motion.p 
                className="text-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                My goal is to create seamless user experiences with clean, efficient code while continuously learning new technologies in this ever-evolving field.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;