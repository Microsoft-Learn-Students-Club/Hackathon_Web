import React, { useState, useEffect } from 'react';

const Registration = () => {
  const [isButtonsEnabled, setButtonsEnabled] = useState(false);

  const handleRegistrationClick = () => {
    // Replace the URL with your actual registration link
    window.location.href = 'https://www.google.com';
  };

  const handleProblemStatementClick = () => {
    // Replace the URL with your actual problem statement link
    window.location.href = 'https://www.example.com/problem-statement';
  };

  const handleConsentFormClick = () => {
    // Replace the URL with your actual consent form link
    window.location.href = 'https://www.example.com/consent-form';
  };

  // Function to check whether conditions for enabling the buttons are met
  const areConditionsMet = () => {
    // Replace with your actual date and time for enabling the buttons
    const enableDate = new Date('February 16, 2024 21:00:00 GMT+0000');
    const currentDate = new Date();
    return currentDate >= enableDate;
  };

  // useEffect to check conditions when the component mounts
  useEffect(() => {
    setButtonsEnabled(areConditionsMet());
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="text-white p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-4">Register for MLSC Codefest: Coherence 1.0</h2>
      <p className="text-lg mb-4">
        Ready to showcase your skills and participate in the hackathon? Click the button below to register!
      </p>
      <button
        onClick={handleRegistrationClick}
        className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 font-bold py-2 px-4 rounded-full mb-4"
      >
        Register Now on Devfolio
      </button>
      {/* Problem Statement Button */}
      <button
        onClick={handleProblemStatementClick}
        className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-2 mx-2 ${isButtonsEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isButtonsEnabled}
      >
        Problem Statements
      </button>
      {/* Consent Form Button */}
      <button
        onClick={handleConsentFormClick}
        className={`bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full mx-2 ${isButtonsEnabled ? '' : 'opacity-50 cursor-not-allowed'}`}
        disabled={!isButtonsEnabled}
      >
        Consent Form
      </button>
    </div>
  );
};

export default Registration;
