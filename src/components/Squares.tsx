/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';

const color = 'darkgreen'
const squareSize = '50px';

const myEmo = css`
  width: ${squareSize};
  height: ${squareSize};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

interface PropsType {
  value: string | null;
}

const Square: React.FC<PropsType> = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div
      className="ClassName"
      css={myEmo}
      onClick={() => setCount(count + 1)}
    >
      {props.value}
    </div>
  );
}

export default Square;
