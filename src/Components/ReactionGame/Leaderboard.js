import axios from "axios";
import { useEffect, useState } from "react";

const Leaderboard = ({ currentUser }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userRank, setUserRank] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://vevek-website-backend-2.onrender.com/leaderboard", {
          params: { email: currentUser?.email },
        });

        if (Array.isArray(response.data.leaderboard)) {
          setLeaderboard(response.data.leaderboard.slice(0, 10));
        } else {
          setLeaderboard([]);
        }

        setUserRank(response.data.userRank || null);
        setError(null);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
        setError("Failed to load leaderboard");
        setLeaderboard([]);
        setUserRank(null);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [currentUser]);

  const isUserInTop10 = userRank && leaderboard.some(player => 
    player.email === currentUser?.email
  );

  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-title">Leaderboard</h2>
      
      {loading ? (
        <div className="loading-message">Loading leaderboard...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Best</th>
              <th>Avg</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((player, index) => (
              <tr 
                key={index} 
                className={player.email === currentUser?.email ? "current-user highlight-row" : ""}
              >
                <td>{player.rank || index + 1}</td>
                <td>
                  {player.name}
                  {player.email === currentUser?.email && <span className="you-badge"> (You)</span>}
                </td>
                <td>{player.bestPoints?.toFixed(3) || "N/A"}</td>
                <td>{player.averagePoints?.toFixed(3) || "N/A"}</td>
              </tr>
            ))}

            {userRank && !isUserInTop10 && (
              <>
                <tr className="separator">
                  <td colSpan="4" className="separator-dots">···</td>
                </tr>
                <tr className="current-user highlight-row">
                  <td>{userRank.rank}</td>
                  <td>
                    {userRank.name}
                    <span className="you-badge"> (You)</span>
                  </td>
                  <td>{userRank.bestPoints?.toFixed(3) || "N/A"}</td>
                  <td>{userRank.averagePoints?.toFixed(3) || "N/A"}</td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;