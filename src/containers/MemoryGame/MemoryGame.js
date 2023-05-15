import React, { useState, useEffect } from "react";
import "./MemoryGame.css";
const CARD_VALUES = ["A", "B", "C", "D", "E", "F", "G", "H"];
const CARD_PAIRS = CARD_VALUES.length;
const CARD_BACK = "X";

const shuffleArray = (arr) => {
  let i, j, temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
const generateCards = () => {
  const cardPairs = [];
  for (let i = 0; i < CARD_PAIRS; i++) {
    cardPairs.push(CARD_VALUES[i]);
    cardPairs.push(CARD_VALUES[i]);
  }
  return shuffleArray(cardPairs).map((value) => ({ value, flipped: false }));
};

const MemoryGame = () => {
  const handleOnClick=()=>{
    window.location.reload()
  }
  const [cards, setCards] = useState(generateCards());
  const [selectedCards, setSelectedCards] = useState([]);
  useEffect(() => {
    if (selectedCards.length !== 2) {
      return;
    }

    const [card1Index, card2Index] = selectedCards;
    const [card1, card2] = [cards[card1Index], cards[card2Index]];

    if (card1.value === card2.value) {
      const updatedCards = [...cards];
      updatedCards[card1Index].flipped = true;
      updatedCards[card2Index].flipped = true;
      setCards(updatedCards);
      setSelectedCards([]);
    } else {
        const updatedCards = [...cards];
        updatedCards[card1Index].flipped = false;
        updatedCards[card2Index].flipped = false;
        setCards(updatedCards);
        setSelectedCards([]);
    }
  }, [cards, selectedCards]);
  const handleCardClick = (index) => {
    const card = cards[index];

    if (card.flipped) {
      return;
    }

    const updatedCards = [...cards];
    updatedCards[index].flipped = true;
    setCards(updatedCards);

    setSelectedCards([...selectedCards, index]);
  };

  return (<>
  <h1 className="title">Memory Matching</h1>
    <div className="memory-game">
      <div className="boardMemory">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
          >
            {card.flipped ? card.value : CARD_BACK}
          </div>

        ))}
    <button className="btn-danger" onClick={handleOnClick}>Restart</button>
      </div>

      
    </div>

    <div>


    </div>
   
    </>
  );
};

export default MemoryGame;