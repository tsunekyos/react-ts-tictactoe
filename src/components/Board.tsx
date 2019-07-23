/** @jsx jsx */
import React, {useState}from 'react';
import { jsx, css } from '@emotion/core';

import Square from './Square';

const squareSize = '40px';

const SquaresCSS = css`
  display: grid;
  flex-wrap: wrap;
  grid-template-rows: ${squareSize} ${squareSize} ${squareSize};
  grid-template-columns: ${squareSize} ${squareSize} ${squareSize};
  // justify-content: center;
`;

interface BoardProps {
  squares: Array<string | null>;
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = (props) => {
  function renderSquare(i: number): JSX.Element {
    return (
      <Square
        value={ props.squares[i] }
        onClick={() => { props.onClick(i); }}
      />
    );
  }

  return (
    <div className="Board">
      <div className="Squares" css={ SquaresCSS }>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );

}

export default Board;
