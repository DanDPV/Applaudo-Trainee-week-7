/* eslint no-unused-vars: 0 */
import React, { useState } from 'react';
import BoardButton from 'components/BoardButton/BoardButton';
import 'components/TimeMachineBoard/TimeMachineBoard.css';

interface ITimeMachineBoard {
  squares: boolean[];
  isTraveling: boolean;
  handleClick(position: number): void;
}

const TimeMachineBoard = ({ squares, isTraveling, handleClick }: ITimeMachineBoard) => {
  const [colors] = useState<string[]>([
    '#f466c8',
    '#f54242',
    '#5fc9f9',
    '#d3adc6',
    '#788f43',
    '#d1c000',
    '#07d1c7',
    '#df5e51',
    '#c9a43d',
    '#3f01c0',
    '#29b502',
    '#e42e5f',
    '#a7762b',
    '#cdb852',
    '#7d3f99',
    '#7d3f09',
  ]);

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
            isTraveling={isTraveling}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeMachineBoard;
