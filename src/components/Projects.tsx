"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const Projects = () => {

  const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "E-commerce-shop",
    alt: "Project 1",
    description:
      "A modern, fully responsive e-commerce platform built with cutting-edge technologies, featuring separate user and admin interfaces with comprehensive shopping functionality and real-time chat support.",
    stack: [{ name: "React js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Node.js" }, { name: "Express.js" }, { name: "MongoDB" }, { name: "Socket.io" }, { name: "Framer motion" }],
    image: "/projects/a.png",
    live: "https://rony-bg-az.netlify.app/",
    github: "https://github.com/mahfujalarony/E-comarce-shop",
    drive: "https://drive.google.com/file/d/15aOM_XuskUQQLnfqfeZ6ngj-ZXKsIxkf/view?usp=sharing"
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Project 2",
    alt: "Project 2",
    description:
      "I have built an advanced e-commerce website using React.js, Node.js, MongoDB Atlas, Tailwind CSS, and used MEGA as cloud storage.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/projects/b.png",
    live: "https://e-comarce.netlify.app/",
    github: "https://github.com/mahfujalarony/E-comarce",
    drive: "https://drive.google.com/file/d/1ChJRZaQ9A0hB7KjuNuXsYcrFuhMOfZsK/view?usp=drive_link",
  },
  {
    num: "03",
    category: "Html/Css",
    title: "Landing Page",
    src: "/projects/c.png",
    alt: "Project 3",
    description:
      "Responsive landing page with Html, JavaScript and Tailwind CSS",
    stack: [{ name: "Html" }, { name: "Tailwind CSS" }],
    image: "/projects/c.png",
    live: "https://landing99.netlify.app/",
    github: "https://github.com/mahfujalarony/landing-website",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Dashboard",

    alt: "Project 4",
    description:
      "I created this dashboard using React.js and Tailwind CSS. It is deployed on Netlify.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Chart.js" }, { name: "Framer Motion" }],
    image: "/projects/d.png",
    live: "https://silver-choux-9715ba.netlify.app/",
    github: "https://github.com/mahfujalarony/Dashboard-2",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Travel Website",
    alt: "Project 5",
    description:
      "This is a travel website built using React.js, TypeScript, Tailwind CSS, and Framer Motion. The website showcases various travel destinations and offers an interactive experience with animations and smooth transitions.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }, { name: "Node.js" }],
    image: "/projects/e.png",
    live: "https://travels97.netlify.app/",
    github: "https://github.com/mahfujalarony/Travel",
    drive: "https://drive.google.com/file/d/1ChJRZaQ9A0hB7KjuNuXsYcrFuhMOfZsK/view"
  },
  {
    num: "06",
    category: "Frontend",
    title: "Restorent",
    alt: "Project 6",
    description:
      "A modern, responsive restaurant website UI built with Next.js and Tailwind CSS. This is a frontend-only project focused on creating an elegant and user-friendly restaurant interface without any backend functionality.",
    stack: [{ name: "React.js" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }],
    image: "/projects/f.png",
    live: "https://restorent-beryl.vercel.app/",
    github: "https://github.com/mahfujalarony/Restorent",
  },
  ];

  return (
    <div className="min-h-screen  text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center ">
          <h1 className="text-3xl font-bold">My <span className='text-[#2df17c]'>Work</span></h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.num} 
              className="rounded-lg  border-[#55cc55] border-t-8 border-2 overflow-hidden shadow-lg transition-transform hover:border hover:border-[#1d4ed8] bg-gray-800"
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 1.2 }}
            >
              <Image 
                src={project.image} 
                alt={project.alt} 
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium px-2 py-1 rounded bg-gray-700 text-blue-400">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium">
                    {project.num}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-1 rounded bg-gray-700 text-blue-300"
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-sm font-medium bg-gray-700 hover:bg-gray-600"
                    >
                      GitHub
                    </a>
                  )}
                  {project.drive && (
                    <a 
                      href={project.drive} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-sm font-medium bg-gray-700 hover:bg-gray-600"
                    >
                      Drive
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects