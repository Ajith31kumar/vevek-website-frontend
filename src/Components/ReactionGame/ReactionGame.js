import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ReactionGame.css"; // Ensure this CSS file is correctly linked

const Form = ({ setFormData, handleFormSubmit }) => {
  return (
    <div className="form-wrapperr">
      <h2 className="form-titler">Player Details</h2>
      <form onSubmit={handleFormSubmit} className="form-containerr">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
        />
        <select
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, sex: e.target.value }))}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          placeholder="Enter your Number"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))}
        />
        <input
          type="number"
          placeholder="Your Age"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
        />
        <button type="submit" className="submit-buttonr">
          Start Playing
        </button>
      </form>
    </div>
  );
};

const Leaderboard = ({ currentUser }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("https://vevek-website-backend-main.onrender.com/leaderboard", {
          params: { email: currentUser?.email },
        });

        if (Array.isArray(response.data.leaderboard)) {
          setLeaderboard(response.data.leaderboard.slice(0, 10));
        } else {
          setLeaderboard([]);
        }

        setUserRank(response.data.userRank || null);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, [currentUser]);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table className="scoreboard">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Best Points</th>
            <th>Average Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.length > 0 ? (
            leaderboard.map((player, index) => (
              <tr key={index}>
                <td>{player.rank || index + 1}</td>
                <td>{player.name}</td>
                <td>{player.bestPoints?.toFixed(3) ?? "N/A"}</td>
                <td>{player.averagePoints?.toFixed(3) ?? "N/A"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No leaderboard data available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {userRank && (
        <div className="current-user-section">
          <h3>Your Rank</h3>
          <table className="current-user-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Best Points</th>
                <th>Average Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="current-user">
                <td>{userRank.rank}</td>
                <td>{userRank.name}</td>
                <td>{userRank.bestPoints?.toFixed(3) ?? "N/A"}</td>
                <td>{userRank.averagePoints?.toFixed(3) ?? "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const ReactionGame = () => {
  const [page, setPage] = useState("start");
  const [formData, setFormData] = useState({ name: "", email: "", sex: "", phone: "", age: "" });
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPage("game");
    setResults([]);
    setFeedback(null);
    setRemainingAttempts(5);
    startGame();
  };

  const startGame = () => {
    if (results.length >= maxAttempts) {
      setPage("result");
      saveGameData();
      return;
    }
    setCircleColor("red");
    setFeedback(null);
    setGreenClicked(false); // Reset greenClicked for the new round
    setTimeout(() => {
      setCircleColor("green");
      setStartTime(performance.now());
    }, Math.random() * 5000 + 3000);
  };

  const handleCircleClick = () => {
    const attemptNumber = results.length + 1;
  
    if (circleColor === "red") {
      // Red circle disappears only if user clicks it (wrong click)
      setCircleColor(null);
      setResults([...results, { attempt: attemptNumber, result: "❌ Wrong Click (Red)" }]);
      setRemainingAttempts(maxAttempts - results.length - 1);
  
      // Red circle reappears after 5 seconds
      setTimeout(() => {
        setCircleColor("red");
      }, 5000);
    } 
    else if (circleColor === "green" && startTime) {
      if (!greenClicked) {
        // First green click: valid reaction, reduce attempts
        setGreenClicked(true);
        const endTime = performance.now();
        const timeTaken = ((endTime - startTime) / 1000).toFixed(3);
        setReactionTime(timeTaken);
        setResults([...results, { attempt: attemptNumber, result: `✅ ${timeTaken} sec` }]);
        
        setRemainingAttempts(maxAttempts - results.length - 1); // Reduce attempts only on first green click
        setCountdown(5);
      } 
      // Ignore second green clicks (don't add any entry)
    } else {
      // Clicking at the wrong time (before green appears)
      setResults([...results, { attempt: attemptNumber, result: "❌ Invalid Click" }]);
      setFeedback("Incorrect Click! Wait for green.");
      setRemainingAttempts(maxAttempts - results.length - 1);
    }
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
      const response = await axios.post("https://vevek-website-backend-main.onrender.com/save", { ...formData, results });
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
    setPage("game");
    setResults([]);
    setGreenClicked(false);
    setRemainingAttempts(5);
    startGame();
  };

  return (
    <div>
      {page === "start" && (
        <div className="start-section">
          <section id="howToPlay">
            <div className="container">
              <div className="title">
                <h2>How To Play</h2>
                <p>
                  Master your reflexes with our simple yet challenging reaction game. Follow these steps to test your speed!
                </p>
              </div>

              <div className="steps">
                <div className="step">
                  <div className="step-number blue">1</div>
                  <h3>Register</h3>
                  <p>Fill in your details to start the game and track your progress</p>
                </div>

                <div className="step">
                  <div className="step-number pink">2</div>
                  <h3>Wait for Green</h3>
                  <p>When you start, you'll see a red circle. Wait for it to turn green</p>
                </div>

                <div className="step">
                  <div className="step-number blue">3</div>
                  <h3>Click Fast!</h3>
                  <p>As soon as the circle turns green, click as quickly as you can</p>
                </div>

                <div className="step">
                  <div className="step-number pink">4</div>
                  <h3>View Results</h3>
                  <p>After 5 attempts, see your average reaction time</p>
                </div>
              </div>

              <div className="pro-tips">
                <h3>Pro Tips</h3>
                <ul>
                  <li>
                    <span className="bullet"></span> Focus on the circle and minimize distractions
                  </li>
                  <li>
                    <span className="bullet"></span> Don't click too early - it will reset the game
                  </li>
                  <li>
                    <span className="bullet"></span> Try to maintain a consistent clicking position
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={() => setPage("form")} className="start-buttonr">Play Game</button>
          </section>
        </div>
      )}
      {page === "form" && <Form setFormData={setFormData} handleFormSubmit={handleFormSubmit} />}
      {page === "game" && (
        <div className="game-container">
          <div className={`circle ${circleColor}`} onClick={handleCircleClick}>
            {feedback && <span className="feedback">{feedback}</span>}
          </div>
          <p className="reaction-timer">Reaction Time: {reactionTime} sec</p>
          <p className="remaining-attempts">Remaining Attempts: {remainingAttempts}</p>
        </div>
      )}
      {page === "result" && (
        <div className="result-containerr">
          <div className="result-left">
            <h2>Results</h2>
            <ul>
              {results.map((item, index) => (
                <li key={index}>
                  Attempt {item.attempt}: {item.result}
                </li>
              ))}
            </ul>
            <button onClick={handleTryAgain} className="try-again-buttonr">
              Try Again
            </button>
            <button onClick={handleExit} className="exit-buttonr">
              Exit
            </button>
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