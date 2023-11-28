import React from 'react';
import './style/About.css';

const About = () => {
  return (
    <div className="about-parent" style={{ zIndex: 1 }}>
      <h2 className="text-3xl font-bold mb-4 text-white mt-8" style={{ zIndex: 1 }}>About MLSC Codefest: Coherence 1.0</h2>
      <p className="text-lg mb-4 text-white" style={{ zIndex: 1 }}>
        MLSC Codefest: Coherence 1.0 is an exciting hackathon organized by the Microsoft Learn Students Club, VCET.
        It provides a platform for innovative minds to come together, collaborate, and create amazing projects.
      </p>
      <p className="text-lg text-white" style={{ zIndex: 1 }}>
        Join us in this coding extravaganza and showcase your skills in Web Devlopement, App Devlopement or AI/ML.
         Let's push the boundaries of technology together!
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default About;
