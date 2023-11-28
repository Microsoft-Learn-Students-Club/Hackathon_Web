// src/components/Resources.js

import React from 'react';
import './style/Resources.css';

const Resources = () => {
  return (
    <div className="parent-resources">
      <h2 className="text-3xl font-bold mb-4">Hackathon Resources</h2>
      <p className="text-lg mb-4">
        Here are some tools and resources that you can use during MLSC Codefest: Coherence 1.0:
      </p>
      <ul className="text-left list-disc">
        <li>
          <a
            href="https://example-tool-1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            Example Tool 1
          </a>
        </li>
        <li>
          <a
            href="https://example-tool-2.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            Example Tool 2
          </a>
        </li>
        <li>
          <a
            href="https://example-resource-1.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            Example Resource 1
          </a>
        </li>
        {/* Add more resources as needed */}
      </ul>
      <p className="text-lg">
        Explore these resources to enhance your hackathon experience and build amazing projects!
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default Resources;
