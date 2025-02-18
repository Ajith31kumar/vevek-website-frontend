import React, { useState, useEffect } from "react";
import "./EliteAthlete.css"; // CSS File Import

// Countdown Timer Component
const CountdownTimer = () => {
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
    <div className="timer-container">
      <div className="timer-box">
        <span className="timer-value">{timeLeft.days}</span>
        <p className="timer-label">Days</p>
      </div>
      <div className="timer-box">
        <span className="timer-value">{timeLeft.hours}</span>
        <p className="timer-label">Hours</p>
      </div>
      <div className="timer-box">
        <span className="timer-value">{timeLeft.minutes}</span>
        <p className="timer-label">Minutes</p>
      </div>
      <div className="timer-box">
        <span className="timer-value">{timeLeft.seconds}</span>
        <p className="timer-label">Seconds</p>
      </div>
    </div>
  );
};

// Registration Section Component
const RegistrationSection = () => {
  return (
    <section className="registration-container">
      <div className="content-wrapper">
        <h2 className="main-heading">
          ⚡ Are You Ready to Train Like an <span className="highlight">Elite Athlete</span>?
        </h2>
        <p className="subtext">
          This FREE Masterclass will give you the missing link to faster reaction times, 
          smarter decisions, and better performance.
        </p>

        <div className="countdown-box1">
          <p className="spots-text">⏳ LIMITED SPOTS REMAINING</p>
          <CountdownTimer />
        </div>

        <p className="cta-text">
          📌 LIMITED SPOTS LEFT! Sign up NOW before it's too late!
        </p>

        <a href="https://tagmango.app/36e3433a84" className="cta-button">
          👉 JOIN NOW – 100% FREE
        </a>
        <p className="text-sm">
          By clicking the button, you'll be redirected to our secure registration page
        </p>
      </div>
    </section>
  );
};

export default RegistrationSection;
