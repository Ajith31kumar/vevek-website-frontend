import React, { useState } from "react";
import "./FaqSection.css";

const faqs = [
  { question: "Is this really free?", answer: "✅ Yes! 100% FREE." },
  { question: "Who is this for?", answer: "✅ Athletes serious about reaction speed & vision training." },
  { question: "Will this work for my sport?", answer: "✅ YES! Any athlete can benefit." },
  { question: "What if I can't attend live?", answer: "✅ Replay provided!" },
  { question: "How long is the session?", answer: "✅ 60 minutes of game-changing value!" }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="faq-background">
      <div className="faq-container">
        <h2 className="faq-heading">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-button" onClick={() => toggleFaq(index)}>
              <span className="faq-question">🔹 Q: {faq.question}</span>
              <svg className={`faq-arrow ${openIndex === index ? "rotate" : ""}`} width="24" height="24" fill="none" stroke="black" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
