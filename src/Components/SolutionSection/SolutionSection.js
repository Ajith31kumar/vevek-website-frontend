import React from "react";
import "./SolutionSection.css";

const SolutionSection = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="container">
        <div className="section-header">
          <h2>
            What You'll Learn in This <span className="highlight1">Webinar</span>
          </h2>
        </div>

        <div className="solution-cards">
          {[
            {
              icon: "🏆",
              title: "The Split-Second Secret",
              text: "How to shave milliseconds off your reactions and make faster decisions on the field."
            },
            {
              icon: "👀⚡",
              title: "Game-Changing Vision Hacks",
              text: "Track movement & anticipate plays faster with proven vision training techniques."
            },
            {
              icon: "🚀",
              title: "The Brain-Speed Formula",
              text: "Strengthen cognitive reflexes & stay sharp under pressure with mental conditioning."
            }
          ].map((item, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{item.icon}</div>
              <h3 className="highlight">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="solution-cta">
          <p>
            💡<span className="highlight">This isn't just theory—it's science-backed, PROVEN training.</span>
          </p>
          <a href="https://tagmango.app/36e3433a84" className="cta-button">
            👉 Reserve Your Free Spot Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
