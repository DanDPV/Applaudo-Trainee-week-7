/* eslint no-unused-vars: 0 */
import React, { useEffect, useState } from 'react';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import 'components/TicTacToeMenu/TicTacToeMenu.css';

interface ITicTacToeMenu {
  currentPosition: number | undefined;
  timeLength: number;
  xIsNext: boolean | undefined;
  isReplaying: boolean | undefined;
  winner: TicTacToeSquareType | string | undefined;
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
          className="ttt-menu-button lined thick"
          disabled={isDisabledPrevious || isReplaying}
          onClick={() => getPreviousValue(+1)}
        >
          Previous
        </button>
        <button
          type="button"
          className="ttt-menu-button lined thick"
          disabled={isDisabledNext || isReplaying}
          onClick={() => getPreviousValue(-1)}
        >
          Next
        </button>
        <button
          type="button"
          className="ttt-menu-button lined thick"
          disabled={isDisabledNext || isReplaying}
          onClick={() => handleResume()}
        >
          Resume
        </button>
      </div>

      <div className="menu-container">
        <button
          type="button"
          className="ttt-menu-button lined thick"
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
            className="ttt-menu-button lined thick"
            disabled={isReplaying}
            onClick={() => handleReplay()}
          >
            Replay
          </button>
        </div>
      )}

      <div>
        <p className="next-to-move-header">Next to move:</p>
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
