import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ReactionGame.css"; // Updated CSS file with new class names

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
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
        <select
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, sex: e.target.value }))}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="number"
          placeholder="Enter your Number"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, number: e.target.value }))} />
        <input
          type="number"
          placeholder="Your Age"
          required
          className="inputr"
          onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))} />
        <button type="submit" className="submit-buttonr">Start Playing</button>
      </form>
    </div>
  );
};

const Leaderboard = ({ currentUser }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);

  // Fetch leaderboard data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("http://localhost:5002/leaderboard");
        const sortedLeaderboard = response.data.sort((a, b) => b.bestPoints - a.bestPoints);
        setLeaderboard(sortedLeaderboard);

        // Ensure email is defined before comparing
        const rank = sortedLeaderboard.findIndex(player => 
          player.email && currentUser?.email && 
          player.email.trim().toLowerCase() === currentUser.email.trim().toLowerCase()
        ) + 1;

        if (rank > 0) {
          setUserRank({ ...sortedLeaderboard[rank - 1], rank });
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };
    fetchLeaderboard();
  }, [currentUser]);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <table>
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
                <tr 
                  key={index} 
                  className={player.email && currentUser?.email &&
                             player.email.trim().toLowerCase() === currentUser.email.trim().toLowerCase() 
                             ? "highlight" 
                             : ""}
                >
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.bestPoints.toFixed(3)}</td>
                  <td>{player.averagePoints.toFixed(3)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Separate Section for Current User */}
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
                <td>{userRank.bestPoints.toFixed(3)}</td>
                <td>{userRank.averagePoints.toFixed(3)}</td>
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
  const [clickCount, setClickCount] = useState(0);
  const [wrongClickCount, setWrongClickCount] = useState(0);
  const [results, setResults] = useState([]);
  const [countdown, setCountdown] = useState(null);
  const [greenClicked, setGreenClicked] = useState(false);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPage("game");
    setClickCount(0);
    setWrongClickCount(0);
    setReactionTime(0);
    setResults([]);
    setGreenClicked(false);
    startGame();
  };

  const handlePlayGameClick = () => {
    setPage("form");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const startGame = () => {
    setCircleColor("red");
    setCountdown(null);
    setGreenClicked(false);
    setTimeout(() => {
      setCircleColor("green");
      setStartTime(performance.now());
    }, Math.random() * 5000 + 3000);
  };

  const handleCircleClick = () => {
    if (circleColor === "green" && startTime && !greenClicked) {
      setGreenClicked(true);
      const endTime = performance.now();
      const timeTaken = ((endTime - startTime) / 1000).toFixed(3);
      setReactionTime(timeTaken);
      setClickCount((prev) => prev + 1);
      setResults([...results, timeTaken]);
      setCountdown(5);
    } else {
      setWrongClickCount((prev) => prev + 1);
    }
  };

  const saveGameData = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:5002/save", { ...formData, results, wrongClickCount });
      setUserRank(response.data.userRank);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  }, [formData, results, wrongClickCount]);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCircleColor("red");
      if (clickCount < 5) {
        startGame();
      } else {
        setPage("result");
        saveGameData();
      }
    }
  }, [countdown, clickCount, saveGameData]);

  const handleExit = async () => {
    await saveGameData();
    setPage("start");
  };

  const handleTryAgain = () => {
    setPage("game");
    setClickCount(0);
    setWrongClickCount(0);
    setReactionTime(0);
    setResults([]);
    setGreenClicked(false);
    startGame();
  };

  return (
    <div>
      {page === 'start' && (
        <div className="start-section">
          <section id="howToPlay">
            <div className="container">
              <div className="title">
                <h2>How To Play</h2>
                <p>
                  Master your reflexes with our simple yet challenging reaction game.
                  Follow these steps to test your speed!
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
                  <p>After 5 attempts, see your average reaction time </p>
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
            <button onClick={handlePlayGameClick} className="start-button">Play Game</button>
          </section>
         
        </div>
      )}
      {page === 'form' && (
        <Form setFormData={setFormData} handleFormSubmit={handleFormSubmit} />
      )}
      {page === "game" && (
        <div className="game-containerr">
          <div className={`circler ${circleColor}`} onClick={handleCircleClick}></div>
          <p className="reaction-timer">Reaction Time: {reactionTime} ms</p>
          {countdown !== null && <p className="countdown">Countdown: {countdown}</p>}
          <p className="wrong-click">Wrong Clicks: {wrongClickCount}</p>
        </div>
      )}
      {page === "result" && (
        <div className="result-containerr">
          <div className="result-left">
            <h2>Results</h2>
            <ul>
              {results.map((time, index) => (
                <li key={index}>Attempt {index + 1}: {time} sec</li>
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