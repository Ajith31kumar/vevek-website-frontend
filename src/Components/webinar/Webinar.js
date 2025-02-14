import React from "react";
import "./Webinar.css"; // Ensure CSS file is linked properly
import vevekImage from "./vevek.png";  // Adjust path if needed

const Webinar = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="content">
          <h1>
            Train Your Eyes & Brain Like an <span className="highlight1">Elite Athlete</span>
          </h1>
          <p className="highlight">🔥 React Faster. Think Sharper. Dominate Every Game You Play.</p> 
          <p>🎯 Milliseconds decide winners. If your reaction speed is slow, you're already behind.</p>

          {/* CTA Section */}
          <div className="cta">
            <p>✔️ Join this <strong>FREE Masterclass</strong> & Gain the Speed Edge!</p>
            <p className="details">
              📅 <strong>Next LIVE Session: 9th Feb, 2025 @ 7PM IST</strong>
              <br /> 🚀 <strong className="highlight">Seats Are Limited – Claim Yours NOW!</strong>
            </p>
          </div>

          <a href="https://tagmango.app/36e3433a84" className="register-btn">
            👉 REGISTER FREE
          </a>
        </div>

        {/* Right Image */}
        <img src={vevekImage} alt="Vivek" className="side-image right" />
      </section>
    </>
  );
};

export default Webinar;
