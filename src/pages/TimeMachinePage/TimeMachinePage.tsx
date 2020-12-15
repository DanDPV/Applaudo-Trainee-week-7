import React, { useState } from 'react';
import TimeMachineBoard from 'components/TimeMachineBoard/TimeMachineBoard';
import 'pages/TimeMachinePage/TimeMachinePage.css';

const TimeMachinePage = () => {
  const size = 4;
  const [squares, setSquares] = useState<boolean[]>(Array(size * size).fill(false));
  const handleClick = (i: number) => {
    const newSquares = Array(size * size).fill(false) as boolean[];
    newSquares[i] = true;
    setSquares(newSquares);
  };
  return (
    <div className="page-content">
      <h1>Time machine</h1>
      <div className="container">
        <div className="board">
          <TimeMachineBoard squares={squares} handleClick={handleClick} />
        </div>
        <div className="info">o</div>
      </div>
    </div>
  );
};

export default TimeMachinePage;
