/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const color = 'darkgreen';
const borderWidth = '1px';

const SquareStyle = css`
  cursor: pointer;
  font-weight: bold;
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

const Square: React.FC<PropsType> = (props) => {
  
  return (
    <div
      className="ClassName"
      css={SquareStyle}
      onClick={ () => { props.onClick() } }
    >
      { props.value }
    </div>
  );
}

export default Square;
