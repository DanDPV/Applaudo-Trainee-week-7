/* eslint no-unused-vars: 0 */
import React from 'react';
import 'components/TicTacToeBoardButton/TicTacToeBoardButton.css';

interface ITicTacToeBoardButton {
  position: number;
  bgColor: string;
  checked: 'x' | 'o' | null;
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
    className="tic-tac-toe-square dashed thick"
    style={{
      cursor: isTraveling ? 'not-allowed' : 'pointer',
    }}
    onClick={() => handleClick(position)}
  >
    {' '}
  </button>
);

export default TicTacToeBoardButton;
