// AnimatedLogo.js
import React from "react";
import YourAnimatedLogo from "../assets/demogif.gif";

const Introduction = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={YourAnimatedLogo} alt="Animated Logo" />
    </div>
  );
};

export default Introduction;
