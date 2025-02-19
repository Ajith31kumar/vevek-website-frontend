import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartButton.css"; // CSS for the button styling

const StartButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/reactiongame"); 
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Small delay to ensure scroll happens after navigation
  };
  

  return (
    <div className="start-button-container">
      <div className="start-button-box">
        <button onClick={handleClick} className="start-button">Start</button>
      </div>
    </div>
  );
};

export default StartButton;
