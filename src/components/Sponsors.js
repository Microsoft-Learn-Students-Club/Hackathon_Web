import React from "react";
// import TitleSponsor from "../assets/sponsor_logo.png";
import "./style/sectionLine.css";
import { motion } from "framer-motion";

const Sponsors = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-white p-4 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 section_header">
        <hr />
        <span>Our Sponsors</span>
        <hr />
      </h2>

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ delay: 8.3, duration: 1 }}
        variants={fadeInVariants}
      >
        <h1 className="text-2xl md:text-3xl font-bold m-8">
          <i>Revealing Soon!</i>
        </h1>
      </motion.div>

      {/* Title Sponsor */}
      {/* <div className="mb-4 md:mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Title Sponsor</h3>
        <div className="flex flex-col items-center">
          <img
            src={TitleSponsor}
            alt="sponsor-1"
            className="max-w-full h-auto mb-2"
            width={100} // Set the desired width in pixels
            height={150} // Set the desired height in pixels
          />
          <p className="text-sm">Title Sponsor Name here</p>
        </div>
      </div> */}

      {/* Co-Sponsors */}
      {/* <div className="mb-4 md:mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Co-Sponsors</h3>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
          <img
            src={TitleSponsor}
            alt="sponsor-1"
            className="max-w-full h-auto mb-2"
            width={100} // Set the desired width in pixels
            height={150} // Set the desired height in pixels
          />
          <img
            src={TitleSponsor}
            alt="sponsor-1"
            className="max-w-full h-auto mb-2"
            width={100} // Set the desired width in pixels
            height={150} // Set the desired height in pixels
          />
        </div>
      </div> */}

      {/* Miscellaneous Sponsors */}
      {/* <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Miscellaneous Sponsors
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
          <div className="items-center text-center mb-4">
            <img
              src={TitleSponsor}
              alt="co-sponsor-2"
              className="max-w-full h-auto mb-2"
              width={100} // Set the desired width in pixels
              height={150} // Set the desired height in pixels
            />
          </div>

          <div className="text-center mb-4">
            <img
              src={TitleSponsor}
              alt="misc-sponsor-1"
              className="max-w-full h-auto mb-2"
              width={100} // Set the desired width in pixels
              height={150} // Set the desired height in pixels
            />
          </div>

          <div className="text-center mb-4">
            <img
              src={TitleSponsor}
              alt="misc-sponsor-2"
              className="max-w-full h-auto mb-2"
              width={100} // Set the desired width in pixels
              height={150} // Set the desired height in pixels
            />
          </div>
          <div className="text-center mb-4">
            <img
              src={TitleSponsor}
              alt="misc-sponsor-2"
              className="max-w-full h-auto mb-2"
              width={100} // Set the desired width in pixels
              height={150} // Set the desired height in pixels
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Sponsors;
