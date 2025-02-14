import React from "react";
import "./Athlete.css"; // Importing custom CSS file

const Athlete = () => {
  return (
    <div className="container">
      <div className="header">
        <h2>📢 <span class="highlight-5">Real Athletes, Real</span> <span className="highlight">Results</span></h2>
      </div>

      <div className="slider">
        <div className="slide">
          <div className="testimonial">
            <div className="icon">💬</div>
            <p>"This eye program greatly improved my vision for cricket, and the mentor's guidance was exceptional. Ditching my eyeglasses was a truly liberating experience!"</p>
            <div className="athlete-info">
              <p className="role">Professional Cricket Player</p>
              <p className="sport">Cricket Player</p>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="testimonial">
            <div className="icon">💬</div>
            <p>"This Eye-Hand Coordination Workshop transformed my reflexes, vision, and focus in cricket. My eyesight improved, and my reaction time became sharper, enhancing my overall performance."</p>
            <div className="athlete-info">
              <p className="role">Professional Cricket Player</p>
              <p className="sport">Cricket Player</p>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="testimonial">
            <div className="icon">💬</div>
            <p>"The EyeQ program greatly improved my vision, reaction time, and hand-eye coordination. I can now track the ball better, judge distances accurately, and react faster on the field."</p>
            <div className="athlete-info">
            <p className="role">Professional Cricket Player</p>
              <p className="sport">Cricket Player</p>

           </div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <p className="cta-text">🔥<span class="highlight-2">If they can do it, so can you.</span> </p>
        <a href="https://tagmango.app/36e3433a84" className="cta-button">👉 Register Now & Get Started</a>
      </div>
    </div>
  );
};

export default Athlete;
