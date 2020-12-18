import timeMachineActionsTypes from 'reducers/timeMachineReducer/timeMachineActionsTypes';
import timeMachineInitialState from 'reducers/timeMachineReducer/timeMachineInitialState';
import ITimeMachineReducerAction from 'reducers/timeMachineReducer/ITimeMachineReducerAction';

const timeMachineReducer = (
  state = timeMachineInitialState,
  action: ITimeMachineReducerAction,
) => {
  const {
    currentPosition,
    isTraveling,
    squares,
  } = action.payload;
  switch (action.type) {
    case timeMachineActionsTypes.SET_NEXT_OPTION:
      return {
        ...state,
        squares,
        historySquares: squares,
      };

    case timeMachineActionsTypes.MOVE_IN_TIME:
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

export default timeMachineReducer;
