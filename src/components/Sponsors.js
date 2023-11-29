import React from "react";
import TitleSponsor from "../assets/sponsor_logo.png";
import "./style/sectionLine.css";


const Sponsors = () => {
  return (
    <div className="text-white p-4 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 section_header"><hr /><span>Our Sponsors</span><hr /></h2>

      {/* Title Sponsor */}
      <div className="mb-4 md:mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Title Sponsor</h3>
        {/* Add your title sponsor details or logo here */}
        <div className="flex flex-col items-center">
          <img
            src={TitleSponsor}
            alt="sponsor-1"
            className="max-w-full h-auto mb-2"
            width={100} // Set the desired width in pixels
            height={150} // Set the desired height in pixels
          />
          <p className="text-sm">ABCD</p>
        </div>
      </div>

      {/* Co-Sponsors */}
      <div className="mb-4 md:mb-8">
        <h3 className="text-lg md:text-xl font-semibold mb-2">Co-Sponsors</h3>
        {/* Add your co-sponsors details or logos here */}
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
      </div>

      {/* Miscellaneous Sponsors */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Miscellaneous Sponsors
        </h3>
        {/* Add your miscellaneous sponsors details or logos here */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
          {/* Add more miscellaneous sponsors as needed */}
          <div className="items-center text-center mb-4">
            <img
              src={TitleSponsor}
              alt="co-sponsor-2"
              className="max-w-full h-auto mb-2"
              width={100} // Set the desired width in pixels
              height={150} // Set the desired height in pixels
            />
          </div>

          {/* Miscellaneous Sponsors */}
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
      </div>
    </div>
  );
};

export default Sponsors;
