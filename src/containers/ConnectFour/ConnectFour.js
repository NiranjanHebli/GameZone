import React, { useState } from 'react';
import './ConnectFour.css';

const EMPTY = 0;
const PLAYER1 = 1;
const PLAYER2 = 2;
const ROWS = 6;
const COLS = 7;
const WINNING_LENGTH = 4;

function ConnectFour() {
  const [board, setBoard] = useState(() => initBoard());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
  const [winner, setWinner] = useState(null);

  const handleCellClick = (row, col) => {
    if (winner !== null || board[row][col] !== EMPTY) {
      return;
    }
    const newBoard = [...board];
    let newRow = row;
    while (newRow < ROWS - 1 && newBoard[newRow + 1][col] === EMPTY) {
      newRow++;
    }
    newBoard[newRow][col] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard, newRow, col);
    setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
  };

  const checkWinner = (board, row, col) => {
    const player = board[row][col];
    const horizontal = checkHorizontal(board, row, player);
    const vertical = checkVertical(board, col, player);
    const diagonal1 = checkDiagonal1(board, row, col, player);
    const diagonal2 = checkDiagonal2(board, row, col, player);
    if (horizontal || vertical || diagonal1 || diagonal2) {
      setWinner(player);
    }
  };

  const checkHorizontal = (board, row, player) => {
    let count = 0;
    for (let col = 0; col < COLS; col++) {
      if (board[row][col] === player) {
        count++;
        if (count === WINNING_LENGTH) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  };

  const checkVertical = (board, col, player) => {
    let count = 0;
    for (let row = 0; row < ROWS; row++) {
      if (board[row][col] === player) {
        count++;
        if (count === WINNING_LENGTH) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  };

  const checkDiagonal1 = (board, row, col, player) => {
    let count = 0;
    let i = row;
    let j = col;
    while (i >= 0 && j >= 0) {
      if (board[i][j] === player) {
        count++;
        if (count === WINNING_LENGTH) {
          return true;
        }
      } else {
        break;
      }
      i--;
      j--;
    }
    i = row + 1;
    j = col + 1;
    while (i < ROWS && j < COLS) {
      if (board[i][j] === player) {
        count++;
        if (count === WINNING_LENGTH) {
          return true;
        }
      } else {
        break;
      }
      i++;
      j++;
    }
    return false;
  };

  const checkDiagonal2 = (board, row, col, player) => {
    let count = 0;
    let i = row;
    let j = col;
    while (i >= 0 && j < COLS) {
    if (board[i][j] === player) {
    count++;
    if (count === WINNING_LENGTH) {
    return true;
    }
    } else {
    break;
    }
    i--;
    j++;
    }
    i = row + 1;
    j = col - 1;
    while (i < ROWS && j >= 0) {
    if (board[i][j] === player) {
    count++;
    if (count === WINNING_LENGTH) {
    return true;
    }
    } else {
    break;
    }
    i++;
    j--;
    }
    return false;
    };
    
    const resetGame = () => {
    setBoard(initBoard());
    setCurrentPlayer(PLAYER1);
    setWinner(null);
    };
    
    const renderCell = (row, col) => {
    const cellValue = board[row][col];
    let className = 'cell';
    if (cellValue === PLAYER1) {
    className += ' player1';
    } else if (cellValue === PLAYER2) {
    className += ' player2';
    }
    return <div key={col} className={className} onClick={() => handleCellClick(row, col)}></div>;
    };
    
    const renderRow = (row) => {
    const cells = [];
    for (let col = 0; col < COLS; col++) {
    cells.push(renderCell(row, col));
    }
    return <div key={row} className="row">{cells}</div>;
    };
    
    const renderBoard = () => {
    const rows = [];
    for (let row = 0; row < ROWS; row++) {
    rows.push(renderRow(row));
    }
    return <div className="board">{rows}</div>;
    };
    
    const renderMessage = () => {
    if (winner !== null) {
    return <div className="message">Player {winner} wins!</div>;
    } else if (board.every(row => row.every(cell => cell !== EMPTY))) {
    return <div className="message">It's a tie!</div>;
    } else {
    return <div className="message">Player {currentPlayer}'s turn</div>;
    }
    };
    
    return (
    <div className="ConnectFour">
    <h1>Connect Four</h1>
    {renderBoard()}
    {renderMessage()}
    <button onClick={resetGame}>Restart</button>
    </div>
    );
    }
    
    function initBoard() {
    const board = [];
    for (let row = 0; row < ROWS; row++) {
    board[row] = [];
    for (let col = 0; col < COLS; col++) {
    board[row][col] = EMPTY;
    }
    }
    return board;
    }
    
    export default ConnectFour;
