"use client";

import React from 'react';
import Projects from '@/components/Projects';
import Button from '@/components/ui/ProjectButton';
import { Playwrite_AU_QLD } from 'next/font/google';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const playwriteAUQLD = Playwrite_AU_QLD({ 
  weight: '400',
});

const Page = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleProjectsClick = () => {
    router.push('/projects');
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <nav className="flex justify-around items-center py-4 shadow-sm">
        <div className="mt-5 hover:scale-95 transition duration-300 cursor-pointer flex items-center gap-2">
          <Image
            width={65}
            height={65}
            src="https://img.icons8.com/stencil/32/m.png"
            alt="M logo"
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
      <Projects />
    </div>
  );
};

export default Page;