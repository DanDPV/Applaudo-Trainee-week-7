import TicTacToeBoard from 'components/TicTacToeBoard/TicTacToeBoard';
import React from 'react';

const TicTacToePage = () => (
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
        menu
      </div>
    </div>
  </div>
);

export default TicTacToePage;
