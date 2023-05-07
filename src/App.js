import React from "react";
import XO from "./containers/XO/XO";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MemoryGame from "./containers/MemoryGame/MemoryGame";
import Hangman from "./containers/Hangman/Hangman";
import RockPaperScissors from "./containers/RockPaperScissors/RockPaperScissors";
import ConnectFour from "./containers/ConnectFour/ConnectFour";
import About from "./components/About";
import Home from "./containers/Home/Home";
import Footer from "./components/Footer/FooterComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/xo" element={<XO />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/hangman" element={<Hangman />} />
        <Route path="/about" element={<About />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        <Route path="/connectfour" element={<ConnectFour />} />
        </Routes>
      </Router>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
