import React from "react";
import logo from "../assets/Logo.png";
import "./style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <div className="bg-black p-4 md:p-8 text-center h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-l from-rose-950 via-purple-400 to-purple-800">
        Welcome to MLSC Codefest: <br />{" "}
        <img className="logo-img" src={logo} alt="Logo" />
      </h1>
      <div className="flex space-x-4 mt-6">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", fontSize: "2rem" }} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", fontSize: "2rem" }} />
        </a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} style={{ color: "#ffffff", fontSize: "2rem" }} />
        </a>
      </div>
      <p className="text-lg md:text-2xl text-white mt-4 md:mt-10">
        Join us for an exciting hackathon experience!
      </p>
    </div>
  );
};

export default Home;
