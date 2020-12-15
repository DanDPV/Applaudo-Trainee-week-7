/* eslint no-unused-vars: 0 */
import React, { useState } from 'react';
import TicTacToeBoardButton from 'components/TicTacToeBoardButton/TicTacToeBoardButton';
import ITicTacToeSquareState from 'interfaces/ITicTacToeSquareState';

interface ITicTacToeBoard {
  squares: ITicTacToeSquareState[];
  isTraveling: boolean;
  handleClick(position: number): void;
}

const TicTacToeBoard = ({ squares, isTraveling, handleClick }: ITicTacToeBoard) => {
  const [color] = useState<string>('gray');

  return (
    <div>
      <div className="board-grid">
        {squares.map((state: ITicTacToeSquareState, position: number) => (
          <TicTacToeBoardButton
            key={state.id}
            position={position}
            bgColor={color}
            checked={state.value}
            handleClick={handleClick}
            isTraveling={isTraveling}
          />
        ))}
      </div>
    </div>
  );
};

export default TicTacToeBoard;
