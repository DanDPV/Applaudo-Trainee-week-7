/* eslint no-unused-vars: 0 */
import React from 'react';
import 'components/BoardButton/BoardButton.css';

interface IBoardButton {
  position: number;
  bgColor: string;
  checked: boolean;
  handleClick(position: number): void;
}

const BoardButton = ({
  position,
  bgColor,
  checked,
  handleClick,
}: IBoardButton) => (
  <button
    type="button"
    className="square"
    style={{ backgroundColor: bgColor, opacity: checked ? '100%' : '50%' }}
    onClick={() => handleClick(position)}
  >
    {position}
  </button>
);

export default BoardButton;
