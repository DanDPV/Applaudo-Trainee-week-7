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
      boxShadow: checked ? '0 0 4px rgba(0, 0, 0, 0.16), 0 6px 8px rgba(0, 0, 0, 0.26)' : 'none',
      border: checked ? 'groove' : 'none',
      borderColor: checked ? 'black' : 'none',
      borderWidth: checked ? 'thin' : '0',
    }}
    onClick={() => handleClick(position)}
  >
    {' '}
  </button>
);

export default BoardButton;
