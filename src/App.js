import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import ReactionGame from "./Components/ReactionGame/ReactionGame";

const Home = () => (
  <>
    <Webinar />
    <HeroSection />
    <SolutionSection />
    <WebinarCountdown targetDate="February 9, 2025 19:00:00 GMT+5:30" />
    <BenefitsSection />
    <CredentialsSection />
    <Athlete />
    <Bonus />
    <ReactionGame />
    <EliteAthlete />
    <FaqSection />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactiongame" element={<ReactionGame />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;