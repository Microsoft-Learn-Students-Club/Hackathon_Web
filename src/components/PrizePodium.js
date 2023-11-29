import React from 'react';

const PrizePodium = () => {
  return (
    <div className="text-white p-4 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Prizes up for grabs!!</h2>
      <p className="text-lg md:text-base mb-4">
        The top 3 teams from each track will be awarded the following cash prizes
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* 2nd Place */}
        <div className="rounded-2xl bg-gray-400 p- md:p-10 mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
          <h3 className="text-xl md:text-2xl font-bold">2nd Place</h3>
          <p>Cash Prize: ₹ 5,000</p>
        </div>

        {/* 1st Place */}
        <div className="rounded-2xl bg-amber-400 p-8 md:p-12 mb-4 md:mb-0 w-full md:w-auto">
          <h3 className="text-xl md:text-2xl font-bold">1st Place</h3>
          <p>Cash Prize: ₹ 10,000</p>
        </div>

        {/* 3rd Place */}
        <div className="rounded-2xl bg-orange-700 p-4 md:p-8 w-full md:w-auto">
          <h3 className="text-xl md:text-2xl font-bold">3rd Place</h3>
          <p>Cash Prize: ₹ 3,000</p>
        </div>
      </div>
    </div>
  );
};

export default PrizePodium;
