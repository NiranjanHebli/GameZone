import React from "react";
import "./App.css";
import About from "./components/About";
import XO from "./containers/XO/XO";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MemoryGame from "./containers/MemoryGame/MemoryGame";
import Hangman from "./containers/Hangman/Hangman";
import RockPaperScissors from "./containers/RockPaperScissors/RockPaperScissors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/xo" element={<XO />} />
          <Route path="/memory" element={<MemoryGame />} />
          <Route path="/hangman" element={<Hangman />} />
        <Route path="/about" element={<About />} />
        <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
