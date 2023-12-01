// import React from "react";
import React, { useState, useEffect } from "react";
import RotatingTagline from "./Tagline";
import aboutImage from "../assets/hackathon-2.jpeg"; // Replace with the actual path to your image
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const [isButtonsEnabled, setButtonsEnabled] = useState(false);
  const controls = useAnimation();

  const handleRegistrationClick = () => {
    window.location.href = "https://www.google.com"; // Replace with your actual registration link
  };

  const handleProblemStatementClick = () => {
    window.location.href = "https://www.example.com/problem-statement"; // Replace with your actual problem statement link
  };

  const handleConsentFormClick = () => {
    window.location.href = "https://www.example.com/consent-form"; // Replace with your actual consent form link
  };

  const areConditionsMet = () => {
    const enableDate = new Date("February 16, 2024 21:00:00 GMT+0530");
    const currentDate = new Date();
    return currentDate >= enableDate;
  };

  useEffect(() => {
    setButtonsEnabled(areConditionsMet());
    controls.start({ x: 0 });
  }, []);

  return (
    <motion.div
      initial={{ x: -1500 }} // Initial position off-screen to the left
      animate={controls}
      transition={{ delay: 1, duration: 1 }}
      className="p-4 md:p-8 text-center md:flex justify-center items-center"
    >
      {/* Left Side: Image */}
      
      <div className="w-full md:w-1/2 mb-4 md:mb-0" style={{ zIndex: 1 }}>
        <img
          src={aboutImage}
          alt="About Us"
          className="rounded-md w-full h-auto md:w-3/4 mx-auto" // Use responsive classes to make the image full width on small screens and 75% width on medium screens
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold mb-4 text-white mt-8">
          About MLSC Codefest: Coherence 1.0
        </h2>
        <p className="text-lg mb-4 text-white text-justify">
          MLSC Codefest: Coherence 1.0 is an exciting hackathon organized by the
          Microsoft Learn Students Club, VCET. It provides a platform for
          innovative minds to come together, collaborate, and create amazing
          projects.
        </p>
        <RotatingTagline />
      </div>
      
    </motion.div>
  );
};

export default About;
