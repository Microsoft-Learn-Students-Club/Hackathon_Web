// import React from "react";
import React, { useState, useEffect } from "react";
import RotatingTagline from "./Tagline";
import aboutImage from "../assets/hackathon.jpeg"; // Replace with the actual path to your image

const About = () => {
  const [isButtonsEnabled, setButtonsEnabled] = useState(false);

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
  }, []);
  return (
    <div className="p-4 md:p-8 text-center md:flex justify-center items-center">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <img
          src={aboutImage}
          alt="About Us"
          className="rounded-md w-full h-full"
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
        {/* Add more content as needed */}
        {/* Register function */}
        <div className="text-white p-8 md:p-16">
          <h2 className="text-3xl font-semibold text-white">
            Ready to Ignite Your Creativity?
          </h2>
          <p className="text-lg mb-8">
            Seize the opportunity to showcase your skills and innovate at MLSC
            Codefest: Coherence 1.0!
          </p>
          <button
            onClick={handleRegistrationClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 font-bold py-2 px-4 rounded-full mb-6"
          >
            Register Now
          </button>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleProblemStatementClick}
              className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full ${
                isButtonsEnabled ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isButtonsEnabled}
            >
              Problem Statements
            </button>
            <button
              onClick={handleConsentFormClick}
              className={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full ${
                isButtonsEnabled ? "" : "opacity-50 cursor-not-allowed"
              }`}
              disabled={!isButtonsEnabled}
            >
              Consent Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
