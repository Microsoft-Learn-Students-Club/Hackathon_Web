import React from 'react';

const JudgingCriteria = () => {
  return (
    <div className="text-white p-8 text-center">
      <h2 className="text-3xl font-bold mb-4">Judging Criteria</h2>
      <p className="text-lg mb-4">
        Projects will be evaluated based on the following criteria:
      </p>
      <ul className="text-left list-disc mb-4">
        <li>Technical Complexity</li>
        <li>Innovation and Creativity</li>
        <li>User Experience and Design</li>
        <li>Impact and Social Relevance</li>
        {/* Add more judging criteria as needed */}
      </ul>
      <p className="text-lg">
        Make sure your project aligns with these criteria to increase your chances of winning!
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default JudgingCriteria;
