import React from "react";
import "./BenefitsSection.css";

const BenefitsSection = () => {
  return (
    <section id="benefits" class="benefits-section">
  <div class="container2">
  
    <div class="header">
      <h2 class="header-title">
        🚀 <span class="highlight-5">The #1 Secret to </span><span class="highlight-3">Reacting Faster</span><span class="highlight-5"> &amp;</span>
        <span class="highlight-2">Performing at Peak Level!</span>
      </h2>
    </div>

  
    <div class="benefits-grid">
      <div class="benefits-left">
        <div class="benefit-item">
          <div class="benefit-content">
            <span class="icon">✅</span>
            <div>
              <h3 class="benefit-title">See the game differently—literally.</h3>
              <p class="benefit-description">Unlock enhanced visual perception and spatial awareness</p>
            </div>
          </div>
        </div>

        <div class="benefit-item delay-1">
          <div class="benefit-content">
            <span class="icon">✅</span>
            <div>
              <h3 class="benefit-title">React in split seconds</h3>
              <p class="benefit-description">Make smarter, faster decisions under pressure</p>
            </div>
          </div>
        </div>

        <div class="benefit-item delay-2">
          <div class="benefit-content">
            <span class="icon">✅</span>
            <div>
              <h3 class="benefit-title">Dominate under pressure</h3>
              <p class="benefit-description">Perform at your peak without hesitation</p>
            </div>
          </div>
        </div>
      </div>

 
      <div class="performance-metrics">
        <div class="performance-text">
          <div class="metric">
            <span class="metric-value">10%</span>
            <p class="metric-description">Average Improvement in Reaction Time</p>
          </div>
          <div class="metric">
            <span class="metric-value">40+</span>
            <p class="metric-description">Athletes Successfully Trained</p>
          </div>
          <div class="metric">
            <span class="metric-value">60</span>
            <p class="metric-description">Minutes to Transform Your Game</p>
          </div>
        </div>
      </div>
    </div>

  
    <div class="cta">
      <p class="cta-text">🔥 <span class="highlight-2">One session could transform your performance.</span></p>
      <a href="https://tagmango.app/36e3433a84" class="cta-button">👉 Claim Your Free Spot Now</a>
    </div>
  </div>

  
  <div class="background-circle-left"></div>
  <div class="background-circle-right"></div>
</section>

  );
};

export default BenefitsSection;
