import React, { useState } from 'react';
import TimeMachineBoard from 'components/TimeMachineBoard/TimeMachineBoard';
import TimeMachineMenu from 'components/TimeMachineMenu/TimeMachineMenu';
import useTimeMachine from 'hooks/useTimeMachine';
import 'pages/TimeMachinePage/TimeMachinePage.css';

const TimeMachinePage = () => {
  const size = 4;
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [isTraveling, setIsTraveling] = useState<boolean>(false);
  const [squares, setSquares] = useState<boolean[]>(Array(size * size).fill(false));
  const [historySquares, setHistorySquares] = useState<boolean[]>(Array(size * size).fill(false));
  const [, getPreviousValue, timeLength] = useTimeMachine(historySquares);

  const handleClick = (i: number) => {
    if (!isTraveling) {
      const newSquares = Array(size * size).fill(false) as boolean[];
      newSquares[i] = true;
      setSquares(newSquares);
      setHistorySquares(newSquares);
    }
  };

  const handleGetPrevious = (step: number) => {
    const newPosition = currentPosition + step;

    setCurrentPosition(newPosition);
    if (newPosition !== 0) {
      setIsTraveling(true);
    } else {
      setIsTraveling(false);
      setHistorySquares(getPreviousValue(newPosition) ?? Array(size * size).fill(false));
    }
    setSquares(getPreviousValue(newPosition) ?? Array(size * size).fill(false));
  };

  return (
    <div className="page-content">
      <h1>Time machine</h1>
      <div className="container">
        <div className="board">
          <TimeMachineBoard
            squares={squares}
            handleClick={handleClick}
            isTraveling={isTraveling}
          />
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
