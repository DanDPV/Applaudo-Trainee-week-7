import ticTacToeActionsTypes from 'reducers/ticTacToeReducer/ticTacToeActionsTypes';
import TicTacToeSquareType from 'types/TicTacToeSquareType';

const ticTacToeReducer = (
  state = [],
  action: {
    type: ticTacToeActionsTypes;
    payload: {
      winner?: TicTacToeSquareType | string,
      error?: string,
      currentPosition?: number,
      xIsNext?: boolean,
      isTraveling?: boolean,
      isReplaying?: boolean,
      squares?: TicTacToeSquareType[],
      historySquares?: TicTacToeSquareType[],
    };
  },
) => {
  const {
    winner,
    error,
    currentPosition,
    xIsNext,
    isTraveling,
    isReplaying,
    squares,
    historySquares,
  } = action.payload;
  switch (action.type) {
    case ticTacToeActionsTypes.SET_ERROR:
      return { ...state, error };

    case ticTacToeActionsTypes.SET_NEXT_PLAY:
      return {
        ...state,
        xIsNext,
        squares,
        historySquares: squares,
      };

    case ticTacToeActionsTypes.MOVE_IN_TIME:
      return {
        ...state,
        currentPosition,
        isTraveling,
        squares,
      };

    case ticTacToeActionsTypes.RESET:
      return {
        ...state,
        currentPosition,
        isTraveling,
        squares,
      };

    default:
      return state;
  }
};

export default ticTacToeReducer;
