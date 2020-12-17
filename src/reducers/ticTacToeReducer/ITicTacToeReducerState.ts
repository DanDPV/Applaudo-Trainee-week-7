import TicTacToeSquareType from 'types/TicTacToeSquareType';

interface ITicTacToeReducerState {
  winner: TicTacToeSquareType | string;
  error: string;
  currentPosition: number;
  xIsNext: boolean;
  isTraveling: boolean;
  isReplaying: boolean;
  squares: TicTacToeSquareType[];
  historySquares: TicTacToeSquareType[];
}

export default ITicTacToeReducerState;