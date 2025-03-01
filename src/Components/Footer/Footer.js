import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import "./footer.css"; // Import the CSS file
import { Link as ScrollLink } from "react-scroll";


const Footer = () => {
  return (
    <div className="footer-container">
      {/* Top Section */}
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3>Forge Your Peak</h3>
          <p>Transforming athletes through advanced vision & cognitive training</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          
          <ul>
          <li><ScrollLink to="webinarDetails" smooth={true} duration={500}>Webinar Details</ScrollLink></li>
          <li><ScrollLink to="benefits" smooth={true} duration={500}>Benefits</ScrollLink></li>
          <li><ScrollLink to="bonuses" smooth={true} duration={500}>Bonuses</ScrollLink></li>
          <li><ScrollLink to="faq" smooth={true} duration={500}>FAQs</ScrollLink></li>
        </ul>

        </div>

        {/* Register CTA */}
        <div className="footer-cta">
          <h4>Ready to Level Up?</h4>
          <a href="https://tagmango.app/36e3433a84" className="register-btn">Register Now</a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Forge Your Peak. All rights reserved.</p>
        <div className="footer-policies">
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms-of-service">Terms of Service</Link> | 
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <p className="footer-disclaimer">
          Disclaimer: Results may vary. Commitment to training required for optimal performance gains.
        </p>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top">
        <button id="backToTop" aria-label="Back to top">
          ↑
        </button>
      </div>
    </div>
  );
};

export default Footer;