import React, { useState } from 'react';
import './RockPaperScissors.css';

const choices = ['rock', 'paper', 'scissors'];

const RockPaperScissors = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice,setPlayerChoice]=useState("");
  const [computerChoice,setComputerChoice]=useState("");
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  function handlePlayerChoice(choice) {
    if (!gameOver) {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      setPlayerChoice(choice);
      setComputerChoice(computerChoice);
      const result = getResult(choice, computerChoice);
      if (result === 'win') {
        setPlayerScore(playerScore + 1);
      } else if (result === 'lose') {
        setComputerScore(computerScore + 1);
      }
      if (playerScore === 2) {
        setGameOver(true);
        setWinner('Player');
      } else if (computerScore === 2) {
        setGameOver(true);
        setWinner('Computer');
      }
    }
  }

  function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return 'tie';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  }

  function handleReset() {
    setPlayerScore(0);
    setComputerScore(0);
    setGameOver(false);
    setWinner(null);
  }

  return (
    <div className="main">
      <h1>Rock Paper Scissors</h1>
      {!gameOver ? (
        <div>
          <p>Player: {playerScore} Computer: {computerScore}</p>
          <div className="choices">
            {choices.map(choice => (
              <button key={choice} onClick={() => handlePlayerChoice(choice)}>
                {choice}
              </button>
            ))}
            <p>Player Choose:{playerChoice} Computer Choose:{computerChoice}</p>
          </div>
        </div>
      ) : (
        <div>
          <p>Game over! {winner} wins!</p>
          <button onClick={handleReset}>Play again</button>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
