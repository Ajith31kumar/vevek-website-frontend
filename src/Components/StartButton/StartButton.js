import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartButton.css"; // CSS for the button styling

const StartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reactiongame")
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure scroll happens after navigation
  };

  return (
    <div className="start-button-container">
      {/* Particle effects background */}
      <div className="particles"></div>

      <div className="start-button-box">
        {/* Attractive heading and subtext */}
        <h1 className="start-button-text">Test Your Reaction Time!</h1>
        <p className="start-button-subtext">Are you fast enough? Click below to find out!</p>
        
        {/* Animated Start Button */}
        <button onClick={handleClick} className="start-button">
          <span className="button-text">Start</span>
          <span className="button-icon">⚡</span> {/* Lightning bolt icon for extra appeal */}
        </button>
      </div>
    </div>
  );
};

export default StartButton;