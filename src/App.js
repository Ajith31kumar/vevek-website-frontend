import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
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

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactiongame" element={<ReactionGame />} />
      </Routes>
      {/* Show Footer only if the user is not on the ReactionGame page */}
      {location.pathname !== "/reactiongame" && <Footer />}
    </>
  );
};

// Wrap App with Router in main index.js
//http://localhost:5002
//https://vevek-website-backend-main.onrender.com iX6dwVyeuroNNfxZ
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
