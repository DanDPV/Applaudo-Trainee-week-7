import ticTacToeActionsTypes from 'reducers/ticTacToeReducer/ticTacToeActionsTypes';
import TicTacToeSquareType from 'types/TicTacToeSquareType';
import ticTacToeInitialState from 'reducers/ticTacToeReducer/ticTacToeInitialState';

const ticTacToeReducer = (
  state = ticTacToeInitialState,
  action: {
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
  } = action.payload;
  switch (action.type) {
    case ticTacToeActionsTypes.SET_WINNER:
      return { ...state, winner };

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

    case ticTacToeActionsTypes.REPLAY:
      return {
        ...state,
        isTraveling,
        isReplaying,
      };

    default:
      return state;
  }
};

export default ticTacToeReducer;
