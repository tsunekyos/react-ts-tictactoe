/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";

const color = "darkgreen";
const borderWidth = "1px";

type SquareProps = {
  fontWeight: string;
  onClick: () => void; // なくても良い？？？
};

const StyledSquare = styled.div<SquareProps>`
  cursor: pointer;
  font-weight: ${props => props.fontWeight};
  box-sizing: border-box;
  margin-top: -${borderWidth};
  margin-right: -${borderWidth};
  border: ${borderWidth} solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PropsType {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<PropsType> = props => {
  return (
    <StyledSquare
      fontWeight="bold"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </StyledSquare>
  );
};

export default Square;
