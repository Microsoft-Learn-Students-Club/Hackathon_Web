// RotatingTagline.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './style/RotatingTagline.css';

const RotatingTagline = () => {
  const taglines = [
    {
      word: 'Innovate',
      description: "To bring forth original and inventive ideas, concepts, or solutions. It's about thinking outside the box, exploring cutting-edge technologies, and proposing novel approaches to problem-solving.",
    },
    {
      word: 'Create',
      description: "To actively develop and build tangible projects based on the innovative ideas conceived during the hackathon. It involves coding, designing, and crafting solutions that go beyond conceptualization.",
    },
    {
      word: 'Transform',
      description: "To effect significant change or improvement through the implementation of innovative creations. It signifies the potential of projects developed during the hackathon to make a meaningful impact, whether by solving real-world problems, enhancing user experiences, or advancing technology in a transformative way.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Set to true to enable automatic scrolling
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds)
    arrows: false, // Hide arrows
  };

  return (
    <div className="rotating-tagline-container">
      <Slider {...settings}>
        {taglines.map((tagline, index) => (
          <div key={index} className="tagline-item">
            <h2 className="text-3xl font-bold mb-2 text-white">{tagline.word}</h2>
            <p className="text-lg text-white text-justify">{tagline.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RotatingTagline;
