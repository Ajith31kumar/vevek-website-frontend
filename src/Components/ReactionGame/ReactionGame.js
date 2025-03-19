import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ReactionGame.css";
import Leaderboard from "./Leaderboard";
import Login from "./Login";

const ReactionGame = ({ email = "" }) => {
  const [page, setPage] = useState("start");
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  const [circleColor, setCircleColor] = useState("red");
  const [reactionTime, setReactionTime] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [results, setResults] = useState([]);
  const [countdown, setCountdown] = useState(null);
  const [greenClicked, setGreenClicked] = useState(false);
  const [userRank, setUserRank] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [maxAttempts] = useState(5);
  const [remainingAttempts, setRemainingAttempts] = useState(5);
  const [allowWrongClick, setAllowWrongClick] = useState(true);

  useEffect(() => {
    if (email !== "") {
      setFormData((prev) => ({ ...prev, email }));
      setPage("game");
      resetGame();
    }
  }, [email]);

  const resetGame = () => {
    setResults([]);
    setFeedback(null);
    setRemainingAttempts(5);
    setCircleColor("red");
    startGame();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPage("game");
    resetGame();
  };

  const startGame = () => {
    if (results.length >= maxAttempts) {
      setPage("result");
      saveGameData();
      return;
    }
    setCircleColor("red");
    setFeedback(null);
    setGreenClicked(false);
    setAllowWrongClick(true);

    const delay = Math.random() * 5000 + 3000;
    setTimeout(() => {
      setCircleColor("green");
      setStartTime(performance.now());
    }, delay);
  };

  const handleCircleClick = () => {
    console.log("Circle Clicked - Current Color:", circleColor);
    console.log("Start Time:", startTime);
    const attemptNumber = results.length + 1;

    if (circleColor === "red") {
        console.log("❌ Wrong Click (Red), hiding...");
        
        if (remainingAttempts > 1) {
            setCircleColor("hidden");

            setTimeout(() => {
                setCircleColor("red");
            }, 2000);
        }

        setResults((prev) => [...prev, { attempt: attemptNumber, result: "❌ Wrong Click (Red)" }]);
        setRemainingAttempts((prev) => prev - 1);
    } 
    
    else if (circleColor === "green" && startTime) {
        if (!greenClicked) {
            console.log("✅ Green Clicked!");
            setGreenClicked(true);
            const timeTaken = ((performance.now() - startTime) / 1000).toFixed(3);
            setReactionTime(timeTaken);
            setResults((prev) => [...prev, { attempt: attemptNumber, result: `✅ ${timeTaken} sec` }]);
            setRemainingAttempts((prev) => prev - 1);
            setCountdown(5);

            setTimeout(() => {
                if (remainingAttempts > 1) {
                    setCircleColor("red");
                }
            }, 2000);
        }
    } 
    
    else {
        console.log("❌ Invalid Click!");
        setFeedback("Incorrect Click! Wait for green.");
    }

    // // 🏁 Automatically navigate to result page when attempts are over
    // if (remainingAttempts === 1) {
    //     setTimeout(() => {
    //         console.log("🔚 Game Over - Redirecting to Results Page!");
    //         setPage("results");
    //     }, 1000);
    // }
};



  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCircleColor("red");
      if (results.length < maxAttempts) {
        startGame();
      } else {
        setPage("result");
        saveGameData();
      }
    }
  }, [countdown, results]);

  const saveGameData = useCallback(async () => {
    try {
      const response = await axios.post("https://vevek-website-backend-2.onrender.com/save", {
        ...formData,
        results,
      });
      setUserRank(response.data.userRank);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [formData, results]);

  const handleExit = async () => {
    await saveGameData();
    setPage("start");
  };

  const handleTryAgain = () => {
  setPage("game");  // Go back to the game page
  setRemainingAttempts(5);
  setResults([]);
  setReactionTime(null);
  setCircleColor("red");
  setGreenClicked(false);
  setStartTime(null);
  setFeedback("");
};

  return (
    <div>
      {page === "start" && (
        <div className="start-section">
          <section id="howToPlay">
            <div className="container">
              <div className="title">
                <h2>How To Play</h2>
                <p>Test your reflexes in this reaction game. Click the green circle as fast as you can!</p>
              </div>
              <div className="steps">
                {["Register", "Wait for Green", "Click Fast!", "View Results"].map((step, index) => (
                  <div className="step" key={index}>
                    <div className={`step-number ${index % 2 === 0 ? "blue" : "pink"}`}>{index + 1}</div>
                    <h3>{step}</h3>
                  </div>
                ))}
              </div>
              <button onClick={() => setPage("form")} className="start-buttonr">Play Game</button>
            </div>
          </section>
        </div>
      )}
      {page === "form" && <Login setFormData={setFormData} handleFormSubmit={handleFormSubmit} setPage={setPage} />}
      {page === "game" && (
        <div className="game-layout">
          {/* Left Side - Instructions */}
          <div className="instructions left">
            <h3>1️⃣ Starting the Game:</h3>
            <p>Click "Start Game" to begin.</p>
            <p>Login by entering your Name, Email, and Age.</p>

            <h3>2️⃣ When the Red Ball Appears:</h3>
            <p>❌ Do NOT click!</p>
            <p>If you click the red ball, it will disappear for 2 seconds and then reappear.</p>
            <p>Your remaining attempts will decrease.</p>
          </div>

          {/* Center - Game Area */}
          <div className="game-container">
            <div className={`circle ${circleColor}`} onClick={handleCircleClick}>
              {feedback && <span className="feedback">{feedback}</span>}
            </div>
            <p className="reaction-timer">Reaction Time: {reactionTime} sec</p>
            <p className="remaining-attempts">Remaining Attempts: {remainingAttempts}</p>
          </div>

          {/* Right Side - Instructions */}
          <div className="instructions right">
            <h3>3️⃣ When the Green Ball Appears:</h3>
            <p>✅ Click it as fast as you can!</p>
            <p>Your reaction time will be recorded.</p>
            <p>You get 5 attempts in total.</p>

            <h3>4️⃣ At the End (Results Page):</h3>
            <p>View your reaction times and Leaderboard rankings.</p>
            <p>Click "Try Again" to play again.</p>
            <p>Click "Exit" to return to the main page.</p>
          </div>
        </div>
      )}
      {page === "result" && (
        <div className="result-containerr">
          <div className="result-left">
            <h2>Results</h2>
            <ul>
              {results.map((item, index) => (
                <li key={index}>Attempt {item.attempt}: {item.result}</li>
              ))}
            </ul>
            <button onClick={handleTryAgain} className="try-again-buttonr">Try Again</button>
            <button onClick={handleExit} className="exit-buttonr">Exit</button>
          </div>
          <div className="result-right">
            <Leaderboard currentUser={formData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactionGame;
