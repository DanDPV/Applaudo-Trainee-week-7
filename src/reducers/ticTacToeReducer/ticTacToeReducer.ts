import ticTacToeActionsTypes from 'reducers/ticTacToeReducer/ticTacToeActionsTypes';
import ITicTacToeReducerState from 'reducers/ticTacToeReducer/ITicTacToeReducerState';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import ticTacToeInitialState from 'reducers/ticTacToeReducer/ticTacToeInitialState';

const ticTacToeReducer = (
  state = {} as ITicTacToeReducerState,
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
      return ticTacToeInitialState;

    default:
      return state;
  }
};

export default ticTacToeReducer;
