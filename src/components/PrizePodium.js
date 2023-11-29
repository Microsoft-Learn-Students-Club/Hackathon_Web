// PrizePodium.js

import React from "react";
import "../components/style/PrizePodium.css";
import "./style/sectionLine.css";

const PrizePodium = () => {
  const prizes = [
    {
      title: "First Prize",
      description: "₹ 10,000 + Certificate",
    },
    {
      title: "Second Prize",
      description: "₹ 5,000 + Certificate",
    },
    {
      title: "Third Prize",
      description: "₹ 3,000 + Certificate",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-12 section_header text-white">
        <hr /> <span>Prizes up for grabs!</span>
        <hr />
      </h2>

      <div className="prize-podium">
        {prizes.map((prize, index) => (
          <div key={index} className="prize-card">
            <div className="card-content">
              <h3 className="text-xl md:text-2xl font-semibold text-white">{prize.title}</h3>
              <p className="text-lg md:text-xl font-bold text-white">{prize.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizePodium;
