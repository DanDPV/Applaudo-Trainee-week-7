import React, { useReducer, Reducer } from 'react';
import TimeMachineBoard from 'components/TimeMachineBoard/TimeMachineBoard';
import TimeMachineMenu from 'components/TimeMachineMenu/TimeMachineMenu';
import useTimeMachine from 'hooks/useTimeMachine';
import ITimeMachineReducerState from 'reducers/timeMachineReducer/ITimeMachineReducerState';
import ITimeMachineReducerAction from 'reducers/timeMachineReducer/ITimeMachineReducerAction';
import timeMachineReducer from 'reducers/timeMachineReducer/timeMachineReducer';
import timeMachineInitialState from 'reducers/timeMachineReducer/timeMachineInitialState';
import timeMachineActionsTypes from 'reducers/timeMachineReducer/timeMachineActionsTypes';
import 'pages/TimeMachinePage/TimeMachinePage.css';

const TimeMachinePage = () => {
  const [state, dispatch] = useReducer<
    Reducer<ITimeMachineReducerState, ITimeMachineReducerAction>
  >(timeMachineReducer, timeMachineInitialState);
  const {
    currentPosition,
    isTraveling,
    squares,
    historySquares,
  } = state;
  const [, getPreviousValue, timeLength] = useTimeMachine(historySquares);

  const handleClick = (i: number) => {
    if (!isTraveling) {
      const newSquares = timeMachineInitialState.squares;
      if (newSquares) {
        newSquares[i] = true;
        dispatch({
          type: timeMachineActionsTypes.SET_NEXT_OPTION,
          payload: {
            squares: newSquares,
          },
        });
      }
    }
  };

  const handleGetPrevious = (step: number) => {
    if (currentPosition !== undefined) {
      const newPosition = currentPosition + step;
      let newIsTraveling = false;

      if (newPosition !== 0) {
        newIsTraveling = true;
      } else {
        newIsTraveling = false;
      }

      dispatch({
        type: timeMachineActionsTypes.MOVE_IN_TIME,
        payload: {
          currentPosition: newPosition,
          isTraveling: newIsTraveling,
          squares: getPreviousValue(newPosition) ?? timeMachineInitialState.squares,
        },
      });
    }
  };

  const handleResume = () => {
    dispatch({
      type: timeMachineActionsTypes.MOVE_IN_TIME,
      payload: {
        currentPosition: 0,
        isTraveling: false,
        squares: getPreviousValue(0) ?? timeMachineInitialState.squares,
      },
    });
  };

  return (
    <div className="page-content">
      <h1>Time machine</h1>
      <div className="time-machine-messages">
        <h5>
          {isTraveling ? 'You are now traveling in time' : 'You are currently in present'}
        </h5>
      </div>
      <div className="container">
        <div className="board">
          <TimeMachineBoard
            squares={squares}
            handleClick={handleClick}
            isTraveling={isTraveling}
          />
        </div>
        <div className="info">
          <TimeMachineMenu
            getPreviousValue={handleGetPrevious}
            handleResume={handleResume}
            currentPosition={currentPosition}
            timeLength={timeLength}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeMachinePage;
