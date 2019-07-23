import React, { useState } from 'react';
import Board from './Board';

const Game: React.FC<any> = () => {
  

  const [squares, setSquares] = useState(Array<string | null>(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState('');// null許容にしたい

  const handleClick = function (i: number) {
    const newSquares = squares.slice();
    
    if(newSquares[i] !== null) {
      return;
    }

    if (calcWinner(newSquares)) {
      setWinner('X');
      return;
    }

    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);

    if (calcWinner(newSquares)) {
      setWinner(xIsNext ? 'X' : 'O');
      return;
    }
    
    setXIsNext(!xIsNext);
  }

  return (
    <div className="Game">
      <h1>Game: {winner}</h1>
      <Board
        squares={squares}
        onClick={(i: number) => { 
          handleClick(i);
        }}
      />
    </div>
  );
}


function calcWinner(squares: Array<string | null>): boolean {

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const [a, b, c] = line;
    if(squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }

  }

  return false;
}

export default Game;
