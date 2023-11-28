import './style/Submission.css';
import React, { useState, useEffect } from "react";

const GeneralGuidelines = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  // Function to check whether conditions for enabling the button are met
  const areConditionsMet = () => {
    // Replace with your actual date and time for enabling the button
    const enableDate = new Date("February 18, 2024 10:00:00 GMT+0000");
    const currentDate = new Date();
    return currentDate >= enableDate;
  };

  // useEffect to check conditions when the component mounts
  useEffect(() => {
    setButtonDisabled(!areConditionsMet());
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div className="parent-submission">
      <h2 className="text-3xl font-bold mb-4">General Guidelines</h2>
      <ul className="text-left list-disc mb-10 px-24 py-8">
        <li>
          All participants are requested to get their identities verified
          beforehand.
        </li>
        <li>
          Problem Statements will be released on Devfolio, Discord, WhatsApp,
          and here by 7th of April.
        </li>
        <li>
          Each team should comprise a minimum of 2 and a maximum of 4 members,
          including the team leader. Team members can be from different
          colleges.
        </li>
        <li>Teams will be shortlisted based on their Devfolio profile.</li>
        <li>
          The hackathon format includes 24 hours of coding. After that, teams
          may present their solutions to the judges.
        </li>
        <li>
          Results of this round will be announced after all presentations are
          reviewed by the judges.
        </li>
        <li>
          The participating teams must select any one problem statement to work
          on and should develop a viable software solution for the same.
        </li>
        <li>
          Teams can freely use available servers or their own servers for
          developing and presenting their product.
        </li>
        <li>
          Mentors will be present to guide students and help them with any
          doubts that may arise.
        </li>
      </ul>
      <button
        onClick={() => alert("Redirect to submission form")} // Replace with actual submission form URL or logic
        className={`bg-yellow-500 hover:bg-yellow-400 text-purple-800 font-bold py-2 px-4 rounded-full ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled}
      >
        Submit Your Project on Devfolio
      </button>
      {/* Add more content as needed */}
    </div>
  );
};

export default GeneralGuidelines;
