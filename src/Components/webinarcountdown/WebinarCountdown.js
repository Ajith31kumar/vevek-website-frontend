import React, { useState, useEffect } from "react";
import "./WebinarCountdown.css";

const WebinarCountdown = () => {  
  const targetDate = new Date("2025-03-02T19:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div  id="webinarDetails" className="container1">
      <div className="card">
        <div className="details-grid">
          <div className="detail-box">
            <div className="icon">📅</div>
            <h3>DATE</h3>
            <p>2nd March, 2025</p>
          </div>
          <div className="detail-box">
            <div className="icon">⏰</div>
            <h3>TIME</h3>
            <p>7PM IST</p>
          </div>
          <div className="detail-box">
            <div className="icon">🎥</div>
            <h3>ACCESS</h3>
            <p>Live on Zoom</p>
          </div>
        </div>

        <div className="cta">
          <p className="highlight-text">🚀 Serious athletes don't wait. Seats are LIMITED.</p>
          <a href="https://tagmango.app/36e3433a84" className="cta-button">
            👉 Secure Your Spot Now – 100% FREE
          </a>
        </div>
      </div>

      <div className="countdown">
        <p className="countdown-text">⏳ Registration Closes In:</p>
        <div className="countdown-timer">
          <div className="countdown-box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>
          <div className="countdown-box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>
          <div className="countdown-box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>
          <div className="countdown-box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarCountdown;
