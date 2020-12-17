/* eslint no-unused-vars: 0 */
import React from 'react';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import 'components/TicTacToeBoardButton/TicTacToeBoardButton.scss';

interface ITicTacToeBoardButton {
  position: number;
  checked: TicTacToeSquareType;
  isTraveling: boolean | undefined;
  handleClick(position: number): void;
}

const TicTacToeBoardButton = ({
  position,
  checked,
  isTraveling,
  handleClick,
}: ITicTacToeBoardButton) => (
  <button
    type="button"
    className="tic-tac-toe-square dashed thick"
    style={{
      cursor: isTraveling ? 'not-allowed' : 'pointer',
      color: (checked === 'x') ? 'red' : 'blue',
    }}
    onClick={() => handleClick(position)}
  >
    {checked}
  </button>
);

export default TicTacToeBoardButton;
