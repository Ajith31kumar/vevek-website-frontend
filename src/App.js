import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Webinar from "./Components/webinar/Webinar";
import HeroSection from "./Components/HeroSection/HeroSection";
import SolutionSection from "./Components/SolutionSection/SolutionSection";
import BenefitsSection from "./Components/BenefitsSection/BenefitsSection";
import CredentialsSection from "./Components/CredentialsSection/CredentialsSection";
import Athlete from "./Components/Athlete/Athlete";
import Bonus from "./Components/Bonus/Bonus";
import EliteAthlete from "./Components/EliteAthlete/EliteAthlete";
import WebinarCountdown from "./Components/webinarcountdown/WebinarCountdown";
import FaqSection from "./Components/Faqsection/FaqSection";
import StartButton from "./Components/StartButton/StartButton";
import ReactionGame from "./Components/ReactionGame/ReactionGame";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/ReactionGame/Dashboard";

const Home = () => (
  <div>
    <Webinar />
    <StartButton />
    <HeroSection />
    <SolutionSection />
    <WebinarCountdown targetDate="February 9, 2025 19:00:00 GMT+5:30" />
    <BenefitsSection />
    <CredentialsSection />
    <Athlete />
    <Bonus />
    <EliteAthlete />
    <FaqSection />
  </div>
);

const App = () => {
  const location = useLocation(); // Correctly placed inside a functional component
  const isReactionGamePage = location.pathname === "/reactiongame";

  return (
    <>
      {!isReactionGamePage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactiongame" element={<ReactionGame />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      {!isReactionGamePage && <Footer />}
    </>
  );
};

// Wrap App with Router in main index.js
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
