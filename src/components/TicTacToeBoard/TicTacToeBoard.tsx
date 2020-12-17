/* eslint no-unused-vars: 0 */
import React, { useState } from 'react';
import TicTacToeBoardButton from 'components/TicTacToeBoardButton/TicTacToeBoardButton';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import 'components/TicTacToeBoard/TicTacToeBoard.css';

interface ITicTacToeBoard {
  squares: TicTacToeSquareType[] | undefined;
  isTraveling: boolean | undefined;
  handleClick(position: number): void;
}

const TicTacToeBoard = ({
  squares,
  isTraveling,
  handleClick,
}: ITicTacToeBoard) => (
  <div>
    <div className="tic-tac-toe-board-grid">
      {squares && squares.map((state: TicTacToeSquareType, position: number) => (
        <TicTacToeBoardButton
          key={position.toString()}
          position={position}
          checked={state}
          handleClick={handleClick}
          isTraveling={isTraveling}
        />
      ))}
    </div>
  </div>
);

export default TicTacToeBoard;
