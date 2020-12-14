import React, { useState } from 'react';
import 'components/TimeMachineBoard/TimeMachineBoard.css';

const TimeMachineBoard = () => {
  const [squares] = useState(Array(4 * 4).fill(null));
  const [colors] = useState([
    '#f466c8',
    '#6a56fc',
    '#5fc9f9',
    '#d3adc6',
    '#788f43',
    '#a480e1',
    '#07d1c7',
    '#df5e51',
    '#c9a43d',
    '#3f01c0',
    '#577bcd',
    '#e42e5f',
    '#a7762b',
    '#cdb852',
    '#7d3f99',
    '#7d3f09',
  ]);
  console.log(squares);
  const renderSquare = (i: number, bgColor: string) => (
    <button type="button" key={i} style={{ backgroundColor: bgColor }} className="square" onClick={() => { console.log(i); }}>
      {i}
    </button>
  );
  return (
    <div>
      <div className="board-grid">
        {
          squares.map((v: boolean, i: number) => renderSquare(i, colors[i]))
        }
      </div>
    </div>
  );
};

export default TimeMachineBoard;
