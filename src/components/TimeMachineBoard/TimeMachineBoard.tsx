import React, { useState } from 'react';
import BoardButton from 'components/BoardButton/BoardButton';
import 'components/TimeMachineBoard/TimeMachineBoard.css';

interface ITimeMachineBoard {
  size: number;
}

const TimeMachineBoard = ({ size }: ITimeMachineBoard) => {
  const [squares, setSquares] = useState<boolean[]>(Array(size * size).fill(false));
  const [colors] = useState<string[]>([
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
  const handleClick = (i: number) => {
    const newSquares = squares.slice();
    newSquares[i] = true;
    setSquares(newSquares);
  };
  return (
    <div>
      <div className="board-grid">
        {squares.map((checked: boolean, position: number) => (
          <BoardButton
            key={colors[position]}
            position={position}
            bgColor={colors[position]}
            checked={checked}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeMachineBoard;
