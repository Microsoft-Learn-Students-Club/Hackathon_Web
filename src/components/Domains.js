import React from 'react';
import './style/Domains.css';
import WebDevImage from '../assets/sponsor1.jpeg'; // Replace with your actual image URLs
import AppDevImage from '../assets/sponsor2.jpeg';
import AIMLImage from '../assets/sponsor3.jpeg';

const Domains = () => {
  const domains = [
    {
      title: 'Web Development',
      description: 'Create interactive and dynamic websites using the latest web technologies.',
      image: WebDevImage,
    },
    {
      title: 'App Development',
      description: 'Build mobile applications for iOS and Android platforms.',
      image: AppDevImage,
    },
    {
      title: 'AI/ML',
      description: 'Explore artificial intelligence and machine learning to solve complex problems.',
      image: AIMLImage,
    },
  ];

  return (
    <div className="parent-domain">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div key={index} className="bg-neutral-400 p-6 rounded-lg shadow-md">
              <img src={domain.image} alt={domain.title} className="w-full object-cover mb-4 rounded-md" />
              <h3 className="text-xl text-black font-bold mb-2">{domain.title}</h3>
              <p className="text-black">{domain.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
