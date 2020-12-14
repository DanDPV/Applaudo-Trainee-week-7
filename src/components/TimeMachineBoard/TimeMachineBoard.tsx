import React, { useState } from 'react';
import 'components/TimeMachineBoard/TimeMachineBoard.css';

const TimeMachineBoard = () => {
  const [squares] = useState(Array(4 * 4).fill(null));
  console.log(squares);
  const renderSquare = (i: number, bgColor: string) => (
    <button type="button" key={bgColor} style={{ backgroundColor: bgColor }} className="square" onClick={() => { console.log(i); }}>
      {i}
    </button>
  );
  return (
    <div>
      <div className="board-grid">
        {
          squares.map((v: boolean, i: number) => renderSquare(i, '#475a7a'))
        }
      </div>
    </div>
  );
};

export default TimeMachineBoard;
