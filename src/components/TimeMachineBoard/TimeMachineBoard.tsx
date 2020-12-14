import React, { useState } from 'react';
import 'components/TimeMachineBoard/TimeMachineBoard.css';

const TimeMachineBoard = () => {
  const [squares] = useState(Array(4 * 4).fill(null));
  console.log(squares);
  const renderSquare = (i: number, bgColor: string) => (
    <button type="button" style={{ backgroundColor: bgColor }} className="square" onClick={() => {}}>
      {i}
    </button>
  );
  return (
    <div>
      <div className="board-row">
        {renderSquare(0, '#475a7a')}
        {renderSquare(1, '#f466c8')}
        {renderSquare(2, '#6a56fc')}
        {renderSquare(3, '#5fc9f9')}
      </div>
      <div className="board-row">
        {renderSquare(4, '#d3adc6')}
        {renderSquare(5, '#788f43')}
        {renderSquare(6, '#a480e1')}
        {renderSquare(7, '#07d1c7')}
      </div>
      <div className="board-row">
        {renderSquare(8, '#df5e51')}
        {renderSquare(9, '#c9a43d')}
        {renderSquare(10, '#3f01c0')}
        {renderSquare(11, '#577bcd')}
      </div>
      <div className="board-row">
        {renderSquare(12, '#e42e5f')}
        {renderSquare(13, '#a7762b')}
        {renderSquare(14, '#cdb852')}
        {renderSquare(15, '#7d3f99')}
      </div>
    </div>
  );
};

export default TimeMachineBoard;
