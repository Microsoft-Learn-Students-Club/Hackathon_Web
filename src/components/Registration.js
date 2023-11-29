import React, { useState, useEffect } from "react";
import "./style/sectionLine.css";


const Registration = () => {
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
    <div>
      <h2 className="text-4xl font-bold section_header text-white">
        <hr /><span> Ready to Ignite Your Creativity?</span><hr />
      </h2>
      <div className="text-white p-8 md:p-16">
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
  );
};

export default Registration;
