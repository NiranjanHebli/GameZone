import "./Home.css";
import React from "react";
import Hero from "../../components/Hero/Hero";
import CardComp from "../../components/Cards/CardComp";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="start">
      <Hero />
      <div className="my-5">
        <h1 className="glitter title">Welcome to GameZone! </h1>
      </div>
      <div className="subsection">
        <h2 className="glitter">Choose a game to play:</h2>
      </div>
      <div className="games-list ">
        <div className="game-card glitter-box">
          <h2 className="subsection">ConnectFour</h2>
          <Link to="/connectfour">
          <button>Play Now</button>
          </Link>
        </div>

        <div className="game-card glitter-box">
          <h2 className="subsection">XO Game</h2>
          <Link to="/xo">
          <button>Play Now</button>
          </Link>
        </div>

        <div className="game-card glitter-box">
          <h2 className="subsection">HangMan</h2>
          <Link to="/hangman">
          <button>Play Now</button>
          </Link>

        </div>

        <div className="game-card glitter-box">
          <h2 className="subsection">MermoryGame</h2>
          <Link to="/memory">
          <button>Play Now</button>
          </Link>
 
        </div>

        <div className="game-card glitter-box">
          <h2 className="subsection"> RockPaperScissors</h2>
          <Link to="/rockpaperscissors">
          <button>Play Now</button>
          </Link>
      
        </div>
      </div>
    </div>
  );
};

export default Home;
