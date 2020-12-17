import TicTacToeSquareType from 'types/TicTacToeSquareType';
import ticTacToeActionsTypes from 'reducers/ticTacToeReducer/ticTacToeActionsTypes';

interface ITicTacToeReducerAction {
  type: ticTacToeActionsTypes;
  payload: {
    winner?: TicTacToeSquareType | string;
    error?: string;
    currentPosition?: number;
    xIsNext?: boolean;
    isTraveling?: boolean;
    isReplaying?: boolean;
    squares?: TicTacToeSquareType[];
  };
}

export default ITicTacToeReducerAction;
