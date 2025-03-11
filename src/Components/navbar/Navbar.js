import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav class="navbar">
  <div class="navbar-brand">Forge Your Peak</div>
  

  <label for="navbar-toggle-checkbox" class="navbar-toggle">
    <span></span>
    <span></span>
    <span></span>
  </label>
  
  
  <input type="checkbox" id="navbar-toggle-checkbox" />

  <div class="navbar-links">
    <a href="#problem" class="navbar-link">Why Us</a>
    <a href="#solution" class="navbar-link">Benefits</a>
    <a href="/reactiongame" class="navbar-link">ReactionGame</a>
    <a href="#webinarDetails" class="navbar-link">Schedule</a>
    <a href="#credentials" class="navbar-link">About</a>
  </div>

  
  <a href="https://tagmango.app/36e3433a84" class="navbar-register" target="_blank" rel="noopener noreferrer">
    Register Now
  </a>
</nav>
  );
};

export default Navbar;
