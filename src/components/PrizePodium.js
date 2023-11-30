// PrizePodium.js

import React from "react";
import "../components/style/PrizePodium.css";
import "./style/sectionLine.css";

const PrizePodium = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-3xl font-bold mb-2 section_header text-white">
        <hr /> <span>Prizes up for grabs!</span>
        <hr />
      </h2>

      <div className="flex flex-col items-center justify-center p-10 text-white md:p-20">
        {/* Component Start */}
        <div className="flex flex-wrap items-center justify-center w-full max-w-4xl mt-8">
          {/* Tile 1 */}
          <div className="flex flex-col flex-grow mt-8 overflow-hidden bg-slate-300 bg-opacity-40 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
            <div className="flex flex-col items-center p-10">
              <span className="font-semibold text-xl text-slate-100">1st - Runner Up</span>
              <div className="flex items-center">
                <span className="text-5xl font-bold"> <span className="text-3xl">₹</span> 5,000 <br /><span className="text-xl text-slate-100">+ Certificate</span></span>
              </div>
            </div>
          </div>
          {/* Tile 2 */}
          <div className="z-10 flex flex-col flex-grow mt-8 overflow-hidden transform bg-yellow-400 bg-opacity-40 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg md:scale-110">
            <div className="flex flex-col items-center p-10">
              <span className="font-bold text-4xl text-slate-100">Winner</span>
              <div className="flex items-center">
                <span className="text-6xl font-bold"> <span className="text-4xl">₹</span> 10,000 <br /><span className="text-xl text-slate-100">+ Certificate</span></span> 
              </div>
            </div>
          </div>
          {/* Tile 3 */}
          <div className="flex flex-col flex-grow overflow-hidden bg-orange-700 bg-opacity-40 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg mt-8 md:mt-19">
            <div className="flex flex-col items-center p-10">
              <span className="font-semibold text-slate-100">2nd - Runner Up</span>
              <div className="flex items-center">
                <span className="text-5xl font-bold"> <span className="text-3xl">₹</span> 3,000 <br /><span className="text-xl text-slate-100">+ Certificate</span></span>
              </div>
            </div>
          </div>
        </div>
        {/* Component End */}
      </div>
    </div>
  );
};

export default PrizePodium;
