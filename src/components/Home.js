import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import "./style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const targetDate = new Date("February 17, 2024 00:00:00 GMT+0530").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      // Target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black p-4 md:p-8 text-center h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-l from-rose-950 via-purple-400 to-purple-800">
        Welcome to MLSC Codefest: <br />{" "}
        <img className="logo-img" src={logo} alt="Logo" />
      </h1>
      <div className="flex space-x-4 mt-6">
        <a href="https://instagram.com/mlsc_vcet?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", fontSize: "2rem" }} />
        </a>
        <a href="https://www.linkedin.com/company/mlsc-vcet/mycompany/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", fontSize: "2rem" }} />
        </a>
        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} style={{ color: "#ffffff", fontSize: "2rem" }} />
        </a>
      </div>
      <div className="text-lg md:text-2xl text-white mt-4 md:mt-10">
        <p>
          <span className="text-6xl">{timeRemaining.days}</span> Days&nbsp;
          <span className="text-6xl">{timeRemaining.hours}</span> Hours&nbsp;
          <span className="text-6xl">{timeRemaining.minutes}</span> Minutes and&nbsp;
          <span className="text-6xl">{timeRemaining.seconds}</span> Seconds left for<br />
          The Final Countdown to Codefest Thrills! 🚀
        </p>
      </div>
    </div>
  );
};

export default Home;
