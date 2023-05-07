import React, { useState } from "react";
import "./Hangman.css";

// const words = ['javascript', 'react', 'node', 'angular', 'vue'];
const words = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "angular",
  "vue",
  "node",
  "express",
  "mongodb",
  "mysql",
  "php",
  "python",
  "django",
  "ruby",
  "rails",
  "sass",
  "less",
  "webpack",
  "babel",
];

const Hangman = () => {
  const [guess, setGuess] = useState("");
  const [word, setWord] = useState(getRandomWord());
  const [hiddenWord, setHiddenWord] = useState(generateHiddenWord(word));
  const [guessesLeft, setGuessesLeft] = useState(6);
  const [gameOver, setGameOver] = useState(false);

  function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  function generateHiddenWord(word) {
    return word.replace(/\w/g, "-");
  }

  function handleGuess(e) {
    e.preventDefault();

    if (!guess) {
      return;
    }

    if (word.includes(guess)) {
      setHiddenWord(
        hiddenWord
          .split("")
          .map((char, index) => {
            if (word[index] === guess) {
              return guess;
            }
            return char;
          })
          .join("")
      );
    } else {
      setGuessesLeft(guessesLeft - 1);
    }

    setGuess("");
  }

const  handleReset=()=> {
    window.location.reload()
  }

  if (guessesLeft <= 0) {
    return (
      <div className="hangman">
        <h1>Game Over!</h1>
        <p>The word was: {word}</p>
        <button className="btn-danger" onClick={handleReset}>Play Again</button>
      </div>
    );
  }

  if (!hiddenWord.includes("-")) {
    return (
      <div className="hangman">
        <h1>You Win!</h1>
        <p>The word was: {word}</p>
        <button className="btn-danger" onClick={handleReset}>Play Again</button>
      </div>
    );
  }

  return (
    <div className="hangman">
      <h1>Hangman</h1>
      <p>Guesses Left: {guessesLeft}</p>
      <p>Word: {hiddenWord}</p>
      <form onSubmit={handleGuess}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button  className="btn-danger" type="submit">Guess</button>
      </form>
    </div>
  );
};

export default Hangman;
