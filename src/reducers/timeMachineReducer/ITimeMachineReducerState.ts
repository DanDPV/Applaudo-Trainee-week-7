interface ITimeMachineReducerState {
  currentPosition: number | undefined;
  isTraveling: boolean | undefined;
  squares: boolean[] | undefined;
  historySquares: boolean[] | undefined;
}

export default ITimeMachineReducerState;
