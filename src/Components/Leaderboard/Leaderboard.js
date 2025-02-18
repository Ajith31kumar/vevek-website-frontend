import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Leaderboard.css"; // Add the CSS styles

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the server
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("http://localhost:5000/leaderboard");
        console.log(response.data);  // Log the fetched data to confirm it
        setLeaderboard(response.data);  // Set leaderboard state
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
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
          {/* Map over leaderboard data to render each player's info */}
          {leaderboard.length > 0 ? (
            leaderboard.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td> {/* Display Rank (index + 1) */}
                <td>{player.name}</td> {/* Player's Name */}
                <td>{player.bestPoints.toFixed(3)}</td> {/* Best Points with 3 decimal places */}
                <td>{player.averagePoints.toFixed(3)}</td> {/* Average Points with 3 decimal places */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Loading...</td> {/* Show loading message if data is not available yet */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
