import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactionGame from "./ReactionGame";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const email = searchParams.get("email");

    if (!email) {
      navigate("/"); // Redirect to home if no email is found
    } else {
      console.log("Email:", email);
      setUser({ email });

      // Redirect to game page after 2 seconds
      setTimeout(() => {
        // navigate("/gamepage");
      }, 2000);
    }
  }, [navigate, searchParams]);

  return (
    <div>
      {user ? (
        <div>
          <ReactionGame email={user.email} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
