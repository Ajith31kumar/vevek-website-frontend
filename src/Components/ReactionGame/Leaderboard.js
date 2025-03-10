import axios from "axios";
import { useEffect, useState } from "react";

const Leaderboard = ({ currentUser }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get("https://vevek-website-backend-2.onrender.com/leaderboard", {
          // https:vevek-website-backend-1.onrender.com
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

export default Leaderboard;