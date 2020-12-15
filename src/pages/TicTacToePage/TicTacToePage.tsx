import TicTacToeBoard from 'components/TicTacToeBoard/TicTacToeBoard';
import ITicTacToeSquareState from 'interfaces/ITicTacToeSquareState';
import React, { useState } from 'react';

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
  const [isTraveling] = useState<boolean>(false);
  const [squares] = useState<ITicTacToeSquareState[]>(initGameValues);

  const handleClick = () => {};

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
