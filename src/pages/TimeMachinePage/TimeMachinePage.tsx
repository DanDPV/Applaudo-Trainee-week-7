import React, { useState } from 'react';
import TimeMachineBoard from 'components/TimeMachineBoard/TimeMachineBoard';
import TimeMachineMenu from 'components/TimeMachineMenu/TimeMachineMenu';
import useTimeMachine from 'hooks/useTimeMachine';
import 'pages/TimeMachinePage/TimeMachinePage.css';

const TimeMachinePage = () => {
  const size = 4;
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [squares, setSquares] = useState<boolean[]>(Array(size * size).fill(false));
  const [, getPreviousValue, timeLength] = useTimeMachine(squares);

  const handleClick = (i: number) => {
    const newSquares = Array(size * size).fill(false) as boolean[];
    newSquares[i] = true;
    setSquares(newSquares);
  };
  const handleGetPrevious = (step: number) => {
    setCurrentPosition(p => p + step);
    console.log(timeLength);
    setSquares(getPreviousValue(currentPosition + step));
  };
  return (
    <div className="page-content">
      <h1>Time machine</h1>
      <div className="container">
        <div className="board">
          <TimeMachineBoard squares={squares} handleClick={handleClick} />
        </div>
        <div className="info">
          <TimeMachineMenu
            getPreviousValue={handleGetPrevious}
            currentPosition={currentPosition}
            timeLength={timeLength}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeMachinePage;
