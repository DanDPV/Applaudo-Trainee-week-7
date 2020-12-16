/* eslint no-unused-vars: 0 */
import TicTacToeBoard from 'components/TicTacToeBoard/TicTacToeBoard';
import TicTacToeMenu from 'components/TicTacToeMenu/TicTacToeMenu';
import useTimeMachine from 'hooks/useTimeMachine';
import React, { useState } from 'react';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import { calculateTicTacToeWinner } from 'utils/utils';

const TicTacToePage = () => {
  const size = 9;
  const initGameValues = Array(size).fill(null) as TicTacToeSquareType[];
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isTraveling, setIsTraveling] = useState<boolean>(false);
  const [squares, setSquares] = useState<TicTacToeSquareType[]>(initGameValues);
  const [historySquares, setHistorySquares] = useState<TicTacToeSquareType[]>(initGameValues);
  const [, getPreviousValue, timeLength] = useTimeMachine(historySquares);

  const handleClick = (position: number) => {
    if (!isTraveling) {
      const newSquares = historySquares.slice();

      if (newSquares) {
        if (calculateTicTacToeWinner(squares)) {
          return;
        }
        if (squares[position]) {
          return;
        }

        newSquares[position] = xIsNext ? 'x' : 'o';
        setXIsNext(!xIsNext);
        setSquares(newSquares);
        setHistorySquares(newSquares);
      }
    }
  };

  const handleGetPrevious = (step: number) => {
    const newPosition = currentPosition + step;

    setCurrentPosition(newPosition);
    if (newPosition !== 0) {
      setIsTraveling(true);
    } else {
      setIsTraveling(false);
      setHistorySquares(getPreviousValue(newPosition) ?? Array(size).fill(false));
    }
    setSquares(getPreviousValue(newPosition) ?? Array(size).fill(false));
  };

  const handleResume = () => {
    setCurrentPosition(0);
    setIsTraveling(false);
    setSquares(getPreviousValue(0) ?? Array(size).fill(false));
  };

  return (
    <div className="page-content">
      <h1>Tic Tac Toe</h1>
      <div className="container">
        <div className="board">
          <TicTacToeBoard
            squares={squares}
            handleClick={handleClick}
            isTraveling={isTraveling}
          />
        </div>
        <div className="info">
          <TicTacToeMenu
            getPreviousValue={handleGetPrevious}
            handleResume={handleResume}
            currentPosition={currentPosition}
            timeLength={timeLength}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTacToePage;
