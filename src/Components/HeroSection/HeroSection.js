import React from "react";
import "./HeroSection.css"; // Importing CSS file

const HeroSection = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="problem-container">
        <h2 className="problem-title">
          🔴 You train your body. But what about your brain?
        </h2>

        <div className="problem-list">
          {[
            "Slow reactions are costing you points",
            "Misjudging distances is killing your accuracy",
            "Hesitating under pressure makes you lose every time",
          ].map((text, index) => (
            <div key={index} className="problem-item">
              <span className="problem-icon">❌</span>
              <p>{text}</p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div className="problem-cta">
          <p className="problem-highlight">
            👀 Your eyes & brain control how fast you react—so why aren't you
            training them?
          </p>
          <p className="problem-description">
            📌 Discover the missing piece to peak athletic performance!
          </p>
          <a
            href="https://tagmango.app/36e3433a84"
            className="problem-btn"
          >
            👉 Register for the FREE Training
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
