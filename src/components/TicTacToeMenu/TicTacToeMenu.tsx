/* eslint no-unused-vars: 0 */
import React, { useEffect, useState } from 'react';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import 'components/TicTacToeMenu/TicTacToeMenu.css';

interface ITicTacToeMenu {
  currentPosition: number;
  timeLength: number;
  xIsNext: boolean;
  isReplaying: boolean;
  winner: TicTacToeSquareType | string;
  getPreviousValue(step: number): void;
  handleResume(): void;
  handleReset(): void;
  handleReplay(): void;
}

const TicTacToeMenu = ({
  currentPosition,
  timeLength,
  xIsNext,
  isReplaying,
  winner,
  getPreviousValue,
  handleResume,
  handleReset,
  handleReplay,
}: ITicTacToeMenu) => {
  const [isDisabledPrevious, setIsDisabledPrevious] = useState<boolean>(true);
  const [isDisabledNext, setIsDisabledNext] = useState<boolean>(true);

  useEffect(() => {
    if (
      timeLength === 0
      || currentPosition === (timeLength > 1 ? timeLength - 1 : timeLength)
    ) {
      setIsDisabledPrevious(true);
    } else setIsDisabledPrevious(false);

    if (currentPosition === 0) setIsDisabledNext(true);
    else setIsDisabledNext(false);
  }, [currentPosition, timeLength]);

  return (
    <>
      <div className="menu-container">
        <button
          type="button"
          className="menu-option"
          disabled={isDisabledPrevious || isReplaying}
          onClick={() => getPreviousValue(+1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="menu-option"
          disabled={isDisabledNext || isReplaying}
          onClick={() => getPreviousValue(-1)}
        >
          Next
        </button>
        <button
          type="button"
          className="menu-option"
          disabled={isDisabledNext || isReplaying}
          onClick={() => handleResume()}
        >
          Resume
        </button>
      </div>

      <div className="menu-container">
        <button
          type="button"
          className="menu-option"
          disabled={isReplaying}
          onClick={() => handleReset()}
        >
          Reset
        </button>
      </div>

      {winner && (
        <div className="menu-container">
          <button
            type="button"
            className="menu-option"
            disabled={isReplaying}
            onClick={() => handleReplay()}
          >
            Replay
          </button>
        </div>
      )}

      <div>
        <p>Next to move:</p>
        <span
          className="next-to-move"
          style={{
            color: xIsNext ? 'red' : 'blue',
          }}
        >
          {xIsNext ? 'x' : 'o'}
        </span>
      </div>
    </>
  );
};

export default TicTacToeMenu;
