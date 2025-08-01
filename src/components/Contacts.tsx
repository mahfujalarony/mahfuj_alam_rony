import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contacts = () => {
  const contacts = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-white group-hover:text-gray-400 text-2xl" />,
      link: 'https://github.com/mahfujalarony',
      bg: 'bg-[#24292e]' // GitHub brand color
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-white group-hover:text-[#0A66C2] text-2xl" />,
      link: 'https://www.linkedin.com/in/mahfuj-alam-rony-b14458248/',
      bg: 'bg-[#0A66C2]'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-white group-hover:text-[#FFA116] text-2xl" />,
      link: 'https://leetcode.com/u/mahhfujalamrony/',
      bg: 'bg-[#FFA116]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-white group-hover:text-[#1877F2] text-2xl" />,
      link: 'https://www.facebook.com/mahaphuja.alama.rani.2025/',
      bg: 'bg-[#1877F2]'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-white group-hover:text-red-500 text-2xl" />,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mahfujalamrony07@gmail.com',
      bg: 'bg-[#D44638]' // Gmail red tone
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-12">Contact Me</h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-col items-center p-6 rounded-lg bg-gray-800 transition-all duration-300 transform hover:scale-105 ${contact.bg}`}
          >
            <div className="mb-2">
              {contact.icon}
            </div>
            <span className="text-lg">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
