/** @jsx jsx */
import React, { useState } from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

import Square from "./Square";

type SquaresProps = {};

const squareSize = "40px";

const StyledSquaress = styled.div<SquaresProps>`
  display: grid;
  flex-wrap: wrap;
  grid-template-rows: ${squareSize} ${squareSize} ${squareSize};
  grid-template-columns: ${squareSize} ${squareSize} ${squareSize};
`;

type BoardProps = {
  squares: Array<string | null>;
  onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = props => {
  function renderSquare(i: number): JSX.Element {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => {
          props.onClick(i);
        }}
      />
    );
  }

  return (
    <div className="Board">
      <StyledSquaress className="Squares">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </StyledSquaress>
    </div>
  );
};

export default Board;
