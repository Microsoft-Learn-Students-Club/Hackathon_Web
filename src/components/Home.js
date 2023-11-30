import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import "./style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const targetDate = new Date("February 17, 2024 00:00:00 GMT+0530").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleRegistrationClick = () => {
    window.location.href = "https://www.google.com"; // Replace with your actual registration link
  };

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
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 100); // Adjust the value based on when you want the button to appear
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black p-4 md:p-8 text-center min-h-screen flex flex-col justify-center items-center">
      <p className="text-white mt-6 text-2xl md:text-3xl font-semibold">
        Welcome to
      </p>
      <h1 className="font-bold text-transparent text-3xl md:text-8xl mt-2 bg-clip-text bg-gradient-to-l from-rose-950 via-purple-400 to-purple-800">
        MLSC Codefest <br />{" "}
        <img className="logo-img mt-2" src={logo} alt="Logo" />
      </h1>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://instagram.com/mlsc_vcet?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/mlsc-vcet/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        </a>
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faDiscord}
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        </a>
      </div>
      <div className="text-lg md:text-2xl text-white mt-4 md:mt-8">
        <p>
          <span className="text-3xl md:text-6xl">{timeRemaining.days}</span>{" "}
          Days &nbsp;
          <span className="text-3xl md:text-6xl">{timeRemaining.hours}</span>{" "}
          Hours &nbsp;
          <span className="text-3xl md:text-6xl">{timeRemaining.minutes}</span>{" "}
          Minutes and&nbsp;
          <span className="text-3xl md:text-6xl">{timeRemaining.seconds}</span>{" "}
          Seconds left <br />
          The Final Countdown to Codefest Thrills! 🚀
        </p>
        <button
          onClick={handleRegistrationClick}
          className="bg-yellow-500 hover:bg-yellow-400 text-purple-800 font-semibold py-2 px-4 rounded-full mt-6"
        >
          Register Now
        </button>
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-purple-500 hover:bg-purple-400 bg-opacity-70 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ color: "#ffffff", fontSize: "2 rem" }}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
