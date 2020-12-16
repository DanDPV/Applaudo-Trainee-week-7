/* eslint no-unused-vars: 0 */
import TicTacToeBoard from 'components/TicTacToeBoard/TicTacToeBoard';
import TicTacToeMenu from 'components/TicTacToeMenu/TicTacToeMenu';
import useTimeMachine from 'hooks/useTimeMachine';
import React, { useEffect, useState } from 'react';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import { calculateTicTacToeWinner } from 'utils/utils';
import 'pages/TicTacToePage/TicTacToePage.css';

const TicTacToePage = () => {
  const size = 9;
  const initGameValues = Array(size).fill(null) as TicTacToeSquareType[];
  const [winner, setWinner] = useState<TicTacToeSquareType>();
  const [error, setError] = useState<string>();
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [isTraveling, setIsTraveling] = useState<boolean>(false);
  const [squares, setSquares] = useState<TicTacToeSquareType[]>(initGameValues);
  const [historySquares, setHistorySquares] = useState<TicTacToeSquareType[]>(initGameValues);
  const [, getPreviousValue, timeLength, reset] = useTimeMachine(historySquares);

  const handleClick = (position: number) => {
    setError('');
    if (!isTraveling) {
      const newSquares = historySquares.slice();

      if (newSquares) {
        if (calculateTicTacToeWinner(squares)) {
          setError('The game has ended');
          return;
        }
        if (squares[position]) {
          setError('That position is already taken');
          return;
        }

        newSquares[position] = xIsNext ? 'x' : 'o';
        setXIsNext(!xIsNext);
        setSquares(newSquares);
        setHistorySquares(newSquares);
      }
    } else {
      setError('You can not alter time events!');
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

  const handleReset = () => {
    reset();
    setSquares(initGameValues);
    setHistorySquares(initGameValues);
    setXIsNext(true);
  };

  useEffect(() => {
    if (calculateTicTacToeWinner(historySquares)) {
      setWinner(calculateTicTacToeWinner(historySquares));
    }
  }, [historySquares]);

  return (
    <div className="page-content">
      <h1>Tic Tac Toe</h1>
      <div className="tic-tac-toe-messages">
        <h5 className="tic-tac-toe-is-traveling">{isTraveling ? 'You are now traveling in time' : 'You are currently in present'}</h5>
        {winner && <h5 className="tic-tac-toe-winner">{`The winner is: ${winner}`}</h5>}
        {error && <h5 className="tic-tac-toe-error">{error}</h5>}
      </div>
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
            handleReset={handleReset}
            currentPosition={currentPosition}
            timeLength={timeLength}
            xIsNext={xIsNext}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTacToePage;
