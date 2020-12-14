/* eslint no-unused-vars: 0 */
import React from 'react';
import 'components/BoardButton/BoardButton.css';

interface IBoardButton {
  position: number;
  bgColor: string;
  handleClick(position: number): void;
}

const BoardButton = ({ position, bgColor, handleClick }: IBoardButton) => (
  <button
    type="button"
    className="square"
    style={{ backgroundColor: bgColor }}
    onClick={() => handleClick(position)}
  >
    {position}
  </button>
);

export default BoardButton;
