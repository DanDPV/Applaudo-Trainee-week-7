import TicTacToeSquareType from 'types/TicTacToeSquareType';

interface ITicTacToeReducerState {
  winner: TicTacToeSquareType | string | undefined;
  error: string | undefined;
  currentPosition: number | undefined;
  xIsNext: boolean | undefined;
  isTraveling: boolean | undefined;
  isReplaying: boolean | undefined;
  squares: TicTacToeSquareType[] | undefined;
  historySquares: TicTacToeSquareType[] | undefined;
}

export default ITicTacToeReducerState;
