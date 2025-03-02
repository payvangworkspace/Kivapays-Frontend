import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../FAQSection.css';

const faqData = [
  { question: 'What documents are required for onboarding?',
    answer: (
      <ul>
        <li>Certificate of Incorporation</li>
        <li>Memorandum & Articles of Association</li>
        <li>Registered Office Address Proof</li>
        <li>Operating License</li>
        <li>Valid Photo ID for Directors</li>
        <li>Director Residential Address Proof</li>
      </ul>
    ),
  },
  { question: 'How long does settlement take?', answer: '7 to 14 days, depending on the merchant business type.' },
  { question: 'Do merchants have portal access?', answer: 'Yes, merchants can manage settlements through their portal.' },
  { question: 'What is the commission percentage?', answer: 'Varies based on business type & location. Contact sales for details.' },
  { question: 'How does integration work?', answer: 'We provide full API documentation & IT support.' },
  { question: 'Are any businesses restricted?',
    answer: (
      <ul>
        <li>Pharmaceuticals or illegal drugs</li>
        <li>Explicit content</li>
        <li>Unauthorized Forex trading</li>
      </ul>
    ),
  },
];

const FaqMiddle = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-content">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{item.question}</h3>
                  <span className="faq-icon">{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>{item.answer}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="faq-image">
          <img src={"/image.png"} alt="FAQ Illustration" />
        </div>
      </div>
    </section>
  );
};

export default FaqMiddle;
