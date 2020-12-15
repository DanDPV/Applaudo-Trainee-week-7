/* eslint no-unused-vars: 0 */
import React from 'react';

interface ITicTacToeBoardButton {
  position: number;
  bgColor: string;
  checked: boolean;
  isTraveling: boolean;
  handleClick(position: number): void;
}

const TicTacToeBoardButton = ({
  position,
  bgColor,
  checked,
  isTraveling,
  handleClick,
}: ITicTacToeBoardButton) => (
  <button
    type="button"
    className="tic-tac-toe-square"
    style={{
      backgroundColor: bgColor,
      cursor: isTraveling ? 'not-allowed' : 'pointer',
    }}
    onClick={() => handleClick(position)}
  >
    {' '}
  </button>
);

export default TicTacToeBoardButton;
