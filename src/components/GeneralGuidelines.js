import React, { useState, useEffect } from "react";
import "./style/sectionLine.css";


const GeneralGuidelines = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  // Function to check whether conditions for enabling the button are met
  const areConditionsMet = () => {
    // Replace with your actual date and time for enabling the button
    const enableDate = new Date("February 18, 2024 10:00:00 GMT+0530");
    const currentDate = new Date();
    return currentDate >= enableDate;
  };

  // useEffect to check conditions when the component mounts
  useEffect(() => {
    setButtonDisabled(!areConditionsMet());
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4 section_header"><hr /> <span>General Guidelines</span><hr /></h2>
      <ul className="text-left list-disc mb-10 px-4 md:px-24 py-4 md:py-8 leading-relaxed">
        <li className="mb-4 text-base md:text-lg">
          All participants are requested to get their identities verified
          beforehand.
        </li>
        <li className="mb-4 text-base md:text-lg">
          Problem Statements will be released on Devfolio, Discord, WhatsApp,
          and here by 16th of February.
        </li>
        <li className="mb-4 text-base md:text-lg">
          Each team should comprise a minimum of 2 and a maximum of 4 members,
          including the team leader. Team members can be from different
          colleges.
        </li>
        <li className="mb-4 text-base md:text-lg">
          Teams will be shortlisted based on their Devfolio profile.
        </li>
        <li className="mb-4 text-base md:text-lg">
          The hackathon format includes 24 hours of coding. After that, teams
          may present their solutions to the judges.
        </li>
        <li className="mb-4 text-base md:text-lg">
          Results of this round will be announced after all presentations are
          reviewed by the judges.
        </li>
        <li className="mb-4 text-base md:text-lg">
          The participating teams must select any one problem statement to work
          on and should develop a viable software solution for the same.
        </li>
        <li className="mb-4 text-base md:text-lg">
          Teams can freely use available servers or their own servers for
          developing and presenting their product.
        </li>
      </ul>

      <button
        onClick={() => alert("Redirect to submission form")} // Replace with actual submission form URL or logic
        className={`bg-yellow-500 hover:bg-yellow-400 text-purple-800 font-bold py-2 px-4 rounded-full ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled}
      >
        Submit Your Project
      </button>
      {/* Add more content as needed */}
    </div>
  );
};

export default GeneralGuidelines;
