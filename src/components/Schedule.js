import React, { useEffect } from "react";
import "./style/sectionLine.css";
import { motion, useAnimation } from "framer-motion";

const Schedule = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 });
  }, []);
  return (
    <div className="px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-4 text-white section_header">
        <hr />
        <span>Event Schedule</span>
        <hr />
      </h2>
      {/* component */}
      <div className="">
        <h3 className="text-2xl mb-4 mt-4 text-white font-semibold">
          Day 1 - 17th February 2024
        </h3>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* left */}
          <div className="flex flex-row-reverse md:contents">
            <motion.div
              initial={{ x: -1500 }} // Initial position off-screen to the left
              animate={controls}
              transition={{ delay: 2, duration: 0.5 }}
              className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-purple-700 border border-white"
            >
                <h3 className="font-semibold text-lg mb-1">
                  9:00 AM - 9:30 AM
                </h3>
                <p className="leading-tight text-justify">
                  Registration and Welcome
                </p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <motion.div
              initial={{ x: -1500 }} // Initial position off-screen to the left
              animate={controls}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-purple-700 border border-white">
              <h3 className="font-semibold text-lg mb-1 text-right">
                10:00 AM - Onwards
              </h3>
              <p className="leading-tight text-right">
                Hackathon Kick-off and Coding Period starts
              </p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <motion.div
              initial={{ x: -1500 }} // Initial position off-screen to the left
              animate={controls}
              transition={{ delay: 2.4, duration: 0.5 }} className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-purple-700 border border-white">
              <h3 className="font-semibold text-lg mb-1">
                12:00 PM - 01:00 PM
              </h3>
              <p className="leading-tight text-justify">Lunch Break</p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <motion.div
              initial={{ x: -1500 }} // Initial position off-screen to the left
              animate={controls}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-purple-700 border border-white">
              <h3 className="font-semibold text-lg mb-1">
                05:00 PM - 05:30 PM
              </h3>
              <p className="leading-tight text-justify">High Tea</p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <motion.div
            initial={{ x: -1500 }} // Initial position off-screen to the left
            animate={controls}
            transition={{ delay: 2.8, duration: 0.5 }}
            className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-purple-700 border border-white">
              <h3 className="font-semibold text-lg mb-1">
                07:00 PM - 09:00 PM
              </h3>
              <p className="leading-tight text-justify">Evaluation Round - I</p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
          </div>
          <div className="flex flex-row-reverse md:contents">
            <motion.div 
            initial={{ x: -1500 }} // Initial position off-screen to the left
            animate={controls}
            transition={{ delay: 3, duration: 0.5 }}
            className="col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md bg-purple-700 border border-white">
              <h3 className="font-semibold text-lg mb-1">
                09:00 PM - 10:00 PM
              </h3>
              <p className="leading-tight text-justify">Dinner Break</p>
            </motion.div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
          </div>
        </div>

        <h3 className="text-2xl mb-4 mt-6 text-white font-semibold">
          Day 2 - 18th February 2024
        </h3>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          {/* right */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
            <motion.div
              initial={{ x: 1500 }} // Initial position off-screen to the left
              animate={controls}
              transition={{ delay: 3.2, duration: 0.5 }} 
              className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border bg-purple-700  border-white">
              <h3 className="font-semibold text-lg mb-1">
                01:00 AM - 01:30 AM
              </h3>
              <p className="leading-tight text-justify">Midnight Snacks</p>
            </motion.div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
            <motion.div 
            initial={{ x: 1500 }} // Initial position off-screen to the left
            animate={controls}
            transition={{ delay: 3.4, duration: 0.5 }} 
            className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border bg-purple-700  border-white">
              <h3 className="font-semibold text-lg mb-1">
                07:30 AM - 08:00 AM
              </h3>
              <p className="leading-tight text-justify">
                Morning Tea and Snacks
              </p>
            </motion.div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
            <motion.div 
            initial={{ x: 1500 }} // Initial position off-screen to the left
            animate={controls}
            transition={{ delay: 3.6, duration: 0.5 }} 
            className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border bg-purple-700  border-white">
              <h3 className="font-semibold text-lg mb-1">
                08:00 AM - 10:00 AM
              </h3>
              <p className="leading-tight text-justify">
                Evaluation Round - II
              </p>
            </motion.div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
            <motion.div 
            initial={{ x: 1500 }} // Initial position off-screen to the left
            animate={controls}
            transition={{ delay: 3.8, duration: 0.5 }} 
            className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border bg-purple-700  border-white">
              <h3 className="font-semibold text-lg mb-1 text-left">
                10:00 AM - 10:30 AM
              </h3>
              <p className="leading-tight text-left">
                Coding Period ends and Final Submission Starts
              </p>
            </motion.div>
          </div>
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-4 flex items-center justify-center">
                <div className="h-full w-1 bg-neutral-500 pointer-events-none" />
              </div>
              <div className="w-4 h-4 absolute top-1/2 -mt-3 rounded-full bg-purple-700 ring-2 ring-white shadow" />
            </div>
            <motion.div 
            initial={{ x: 1500 }} // Initial position off-screen to the left
            animate={controls}
            transition={{ delay: 4, duration: 0.5 }} 
            className="col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border bg-purple-700  border-white">
              <h3 className="font-semibold text-lg mb-1 text-left">
                12:00 PM - 02:00 PM
              </h3>
              <p className="leading-tight text-left">
                Result Announcement and Felicitation Ceremony
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
