import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FAQs = () => {
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleQuestion = (index) => {
    const newExpandedQuestions = [...expandedQuestions];
    const isExpanded = newExpandedQuestions.includes(index);

    if (isExpanded) {
      // If already expanded, collapse
      newExpandedQuestions.splice(newExpandedQuestions.indexOf(index), 1);
    } else {
      // If not expanded, expand
      newExpandedQuestions.push(index);
    }

    setExpandedQuestions(newExpandedQuestions);
  };

  const faqsData = [
    { question: 'How do I register for the hackathon?', answer: 'You can register by visiting our registration page and following the instructions.' },
    { question: 'What are the eligibility criteria?', answer: 'The hackathon is open to all participants with brain.' },
    { question: 'Can I participate as an individual or do I need a team?', answer: 'Both individual and team participation are allowed. You can choose your preferred option during registration.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="text-white p-4 md:p-8 px-4 md:px-28">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>

      {faqsData.map((faq, index) => (
        <div key={index} className="rounded p-4 mb-4 border border-white text-left relative">
          <div className="flex justify-between items-center">
            <div
              className="cursor-pointer font-bold text-xl md:text-2xl mb-2"
              onClick={() => toggleQuestion(index)}
            >
              {faq.question}
            </div>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-2 transition-transform transform ${expandedQuestions.includes(index) ? 'rotate-180' : ''}`}
              onClick={() => toggleQuestion(index)}
            />
          </div>
          {expandedQuestions.includes(index) && (
            <div className="mt-2">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
