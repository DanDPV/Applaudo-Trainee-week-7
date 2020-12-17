import timeMachineActionsTypes from 'reducers/timeMachineReducer/timeMachineActionsTypes';

interface ITimeMachineReducerAction {
  type: timeMachineActionsTypes;
  payload: {
    currentPosition?: number;
    isTraveling?: boolean;
    squares?: boolean[];
  };
}

export default ITimeMachineReducerAction;
