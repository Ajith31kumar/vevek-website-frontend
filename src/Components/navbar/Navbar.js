import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Forge Your Peak</div>
      <div className="navbar-links">
        <ScrollLink to="problem" smooth={true} duration={500} className="navbar-link">
          Why Us
        </ScrollLink>
        <ScrollLink to="solution" smooth={true} duration={500} className="navbar-link">
          Benefits
        </ScrollLink>
        <Link to="/reactiongame" className="navbar-link">ReactionGame</Link>
        <ScrollLink to="webinarDetails" smooth={true} duration={500} className="navbar-link">
          Schedule
        </ScrollLink>
        <ScrollLink to="credentials" smooth={true} duration={500} className="navbar-link">
          About
        </ScrollLink>
      </div>
      <a href="https://tagmango.app/36e3433a84" className="navbar-register" target="_blank" rel="noopener noreferrer">
        Register Now
      </a>
    </nav>
  );
};

export default Navbar;
