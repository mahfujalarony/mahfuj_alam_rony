"use client";

import React from 'react'
import Background from './ui/Background'
import Body from './Body'

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#1a1a2e] via-[#23234b] to-[#0f3460]">
      <Background />
      <Body />
      <div className="w-full relative bg-white ">
        <div className="wave">
            <div className="w w-1"></div>
            <div className="w w-2"></div>
            <div className="w w-3"></div>
            <div className="w w-4"></div>
        </div>
     </div>
    </div>
  )
}

export default Hero
