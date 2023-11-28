import React from "react";
import logo from "../assets/Logo.png";
import './style/home.css';
// import Typewriter from 'react-typewriter-effect';      // Uncomment this line to use the typewriter effect

const Home = () => {
  return (
    <div className="main">
      {/* Can add club logo here */}
      <h1 className="Heading">
        Welcome to MLSC Codefest
      </h1>
      <img className="logo-img" src={logo} alt="This was the logo" />
      <p className="text-2xl text-white mt-10">
        Join us for an exciting hackathon experience!
      </p>
      {/* Uncomment following code block for typing effect.*/}
      {/* <Typewriter
        options={{
          strings: ['Connect. Collaborate. Code.'],
          autoStart: true,
          loop: false,
        }}
      /> */}
    </div>
  );
};

export default Home;
