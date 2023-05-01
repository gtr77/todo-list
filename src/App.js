import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] || checkWinner(newBoard)) {
      return;
    }

    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === 'X' ? 'O' : 'X');
  }

  const renderSquare = (index) => {
    return (
        <button className="square" onClick={() => handleClick(index)}>
          {board[index]}

        </button>
    );
  }

  const winner = checkWinner(board);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (board.every((square) => square !== null)) {
    status = 'Draw!';
  } else {
    status = `Next player: ${player}`;
  }

  return (
      <div className="game">
        <div className="game-board">
          <div className="game-info">
            <div>{status}</div>
          </div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
  );
}

export default TicTacToe;
