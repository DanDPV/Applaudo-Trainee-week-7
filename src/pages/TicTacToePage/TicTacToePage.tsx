/* eslint no-unused-vars: 0 */
import TicTacToeBoard from 'components/TicTacToeBoard/TicTacToeBoard';
import useTimeMachine from 'hooks/useTimeMachine';
import ITicTacToeSquareState from 'interfaces/ITicTacToeSquareState';
import React, { useState } from 'react';
import { calculateTicTacToeWinner } from 'utils/utils';

const TicTacToePage = () => {
  const initGameValues = [
    { id: 0, value: null },
    { id: 1, value: null },
    { id: 2, value: null },
    { id: 3, value: null },
    { id: 4, value: null },
    { id: 5, value: null },
    { id: 6, value: null },
    { id: 7, value: null },
    { id: 8, value: null },
  ];
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isTraveling, setIsTraveling] = useState<boolean>(false);
  const [squares, setSquares] = useState<ITicTacToeSquareState[]>(initGameValues);
  const [historySquares, setHistorySquares] = useState<ITicTacToeSquareState[]>(initGameValues);
  const [, getPreviousValue, timeLength] = useTimeMachine(historySquares);

  const handleClick = (position: number) => {
    if (!isTraveling) {
      const newSquares = historySquares.slice();

      if (newSquares) {
        if (calculateTicTacToeWinner(squares)) {
          return;
        }
        if (squares[position].value) {
          return;
        }

        newSquares[position].value = xIsNext ? 'x' : 'o';
        setXIsNext(!xIsNext);
        setSquares(newSquares);
        setHistorySquares(newSquares);
      }
    }
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
        <div className="info">menu</div>
      </div>
    </div>
  );
};

export default TicTacToePage;
