"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Montserrat, Michroma } from 'next/font/google';
import skills from '@/lib/Skill'

const montserrat = Montserrat({ subsets: ['latin'] });
const michroma = Michroma({ weight: '400', subsets: ['latin'] });

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];


const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="min-h-screen  py-20 px-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
            <motion.h1 
                className={`text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center  bg-gradient-to-r from-gray-100 to-white bg-clip-text  text-transparent ${michroma.className}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                My Skills
          </motion.h1>
          <p className={`${montserrat.className} text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed`}>
            Crafting digital experiences with modern technologies and creative problem-solving
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/*  Grid */}
        <AnimatePresence mode="wait">
  <motion.div
    key={selectedCategory}
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
  >
    {filteredSkills.map((skill, index) => (
      <motion.div
        key={skill.name}
        variants={itemVariants}
        className="group relative"
        onHoverStart={() => setHoveredSkill(skill.name)}
        onHoverEnd={() => setHoveredSkill(null)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-[380px] flex flex-col justify-between">
          {/* Skill Icon and Name */}
          <div className="flex items-center mb-4">
            <motion.div 
              className="text-4xl mr-6 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {skill.icon}
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                {skill.name}
              </h3>
              <span className="text-xs text-purple-400 font-medium">
                {skill.category}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className={`${montserrat.className} text-white text-sm leading-relaxed mb-6 overflow-auto max-h-40 pr-2 custom-scrollbar`}>
            {skill.description}
          </p>

          {/* Proficiency Bar */}
          <div className="mt-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-slate-400">Proficiency</span>
              <span className="text-xs font-bold text-purple-400">{skill.level}%</span>
            </div>
            
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              />
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
            animate={{ opacity: hoveredSkill === skill.name ? 1 : 0 }}
          />
        </div>
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>


        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {skills.length}
            </motion.div>
            <p className="text-slate-400 mt-2">Total Skills</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
            >
              {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
            </motion.div>
            <p className="text-slate-400 mt-2">Average Proficiency</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
            <motion.div
              className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
            >
              {skills.filter(skill => skill.level >= 80).length}
            </motion.div>
            <p className="text-slate-400 mt-2">Expert Level</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;