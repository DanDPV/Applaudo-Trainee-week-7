/* eslint no-unused-vars: 0 */
import React from 'react';
import 'components/BoardButton/BoardButton.css';

interface IBoardButton {
  position: number;
  bgColor: string;
  checked: boolean;
  isTraveling: boolean;
  handleClick(position: number): void;
}

const BoardButton = ({
  position,
  bgColor,
  checked,
  isTraveling,
  handleClick,
}: IBoardButton) => (
  <button
    type="button"
    className="square"
    style={{
      backgroundColor: bgColor,
      opacity: checked ? '100%' : '50%',
      cursor: isTraveling ? 'not-allowed' : 'pointer',
    }}
    onClick={() => handleClick(position)}
  >
    {position}
  </button>
);

export default BoardButton;
