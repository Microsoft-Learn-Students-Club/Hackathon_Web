import React, { useRef } from 'react';
import './style/Sponsors.css';

const Sponsors = () => {
  const sponsorLogos = [
    { name: 'Sponsor 1', logo: '../assets/sponsor1.jpeg' },
    { name: 'Sponsor 2', logo: '../assets/sponsor2.jpeg' },
    { name: 'Sponsor 3', logo: '../assets/sponsor3.jpeg' },
    // Add more sponsors as needed
  ];

  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'next' ? container.clientWidth : -container.clientWidth;
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="parent-sponsor">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Sponsors</h2>
        <div
          ref={containerRef}
          className="flex space-x-8 overflow-hidden relative"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {sponsorLogos.map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-32 bg-white p-4 rounded-md shadow-md"
              style={{ scrollSnapAlign: 'start' }}
            >
              {/* Display sponsor logo or name */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 flex space-x-4">
          <button
            className="text-white bg-purple-600 p-2 rounded-full hover:bg-purple-700"
            onClick={() => scroll('prev')}
          >
            &lt;
          </button>
          <button
            className="text-white bg-purple-600 p-2 rounded-full hover:bg-purple-700"
            onClick={() => scroll('next')}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
