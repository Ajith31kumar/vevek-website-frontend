import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Forge Your Peak</div>
      <div className="navbar-links">
        <Link to="#problem" className="navbar-link">Why Us</Link>
        <Link to="#solution" className="navbar-link">Benefits</Link>
        <Link to="/reactiongame" className="navbar-link">ReactionGame</Link>
        <Link to="#webinarDetails" className="navbar-link">Schedule</Link>
        <Link to="#credentials" className="navbar-link">About</Link>
      </div>
      <a href="https://tagmango.app/36e3433a84" className="navbar-register" target="_blank" rel="noopener noreferrer">Register Now</a>
    </nav>
  );
};

export default Navbar;