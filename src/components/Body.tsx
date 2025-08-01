"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Playwrite_AU_QLD, Raleway } from 'next/font/google';
import Image from 'next/image';
import Button from './ui/ProjectButton';

const playwriteAUQLD = Playwrite_AU_QLD({ 
  weight: '400',
});

const raleway = Raleway({
  weight: '100',
  subsets: ['latin'],
});

const Body = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleProjectsClick = () => {
    router.push('/projects');
  };

  return (
    <div className="min-h-screen relative z-10"> 
      <nav className="flex justify-around items-center py-4 shadow-sm">
        <div className="mt-5 hover:scale-95 transition duration-300 cursor-pointer flex items-center gap-2">
          <Image
            width={65}
            height={65}
            src="https://img.icons8.com/stencil/32/m.png"
            alt="M logo"
            className="h-[65px] w-[65px]"
          />
          <p className={`${playwriteAUQLD.className} hidden md:block text-white text-3xl font-semibold`}>
            Mahfuj
          </p>
          <p className={`${playwriteAUQLD.className} hidden md:block text-4xl text-white font-semibold`}>
            Alam
          </p>
        </div>

        <div className="flex mt-5 gap-6">
          <Button 
            text="home" 
            onClick={handleHomeClick} 
            className="cursor-pointer hover:scale-95 transition duration-300"
          />
          <Button 
            text="projects" 
            onClick={handleProjectsClick} 
            className="cursor-pointer hover:scale-95 transition duration-300"
          />
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 text-center">  
        <h1 className={`text-4xl md:mt-10 font-bold mb-4 ${playwriteAUQLD.className}`}>
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent leading-[2.1]">
            Mahfuj Alam Rony
          </span>
        </h1>
        <p className={`text-2xl md:text-3xl mt-10 ${raleway.className} text-gray-100`}>
          I am a <span className="font-bold">frontend developer</span>, and I also have <span className="font-bold">backend skills</span>.
        </p>

        <div className="btn-g mt-10">
          <span className="br">
            <a
              className="clink"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mahfujalamrony07@gmail.com&subject=from portfolio"
            >
              <span>
                <i className="fa-solid fa-envelope" />
              </span>
              <span className="text-lg lg:text-xl">Contact Me</span>
            </a>
          </span>
          <span className="br">
            <a 
              className="clink"  
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/142xaY2mVgLMoqJ_vWQeX3Vg9H4xk4aW4/view?usp=sharing"
            >
              <span>
                <i className="fa-solid fa-file" />
              </span>
              <span className="text-lg md:text-xl">My Resume</span>
            </a>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Body;