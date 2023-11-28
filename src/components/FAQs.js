import React, { useState } from 'react';
import './style/faq.css';

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
    { question: 'What is the allowed Team size?', answer: '1-4 Members in a single team' },
    { question: 'What is the registration cost?', answer: '₹250 per team member.' },
    { question: 'Are travel expenses included too?', answer: 'No, the participants are responsible for covering their travel expenses.' },
    { question: 'Is it an Online or an Offline Hackathon?', answer: 'Coherence 1.0 is being hosted Offline only.' },
    { question: 'What are the eligibility criteria?', answer: 'The hackathon is open to all participants with an active brain.' },
    { question: 'Can I participate as an individual or do I need a team?', answer: 'Both individual and team participation are allowed. You can choose your preferred option during registration.' },
    { question: 'Can a member be a part of two teams?', answer: 'No, every members should be a part of a single team.' },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq">
      <h2 className="faq-head">Frequently Asked Questions</h2>

      {faqsData.map((faq, index) => (
        <div key={index} className="qna">
          <div
            className="question"
            onMouseEnter={() => toggleQuestion(index)}
            onMouseLeave={() => toggleQuestion(index)}
          >
            {faq.question}
          </div>
          {expandedQuestions.includes(index) && (
            <div className="answer">
              <p className='answer-p' >{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
