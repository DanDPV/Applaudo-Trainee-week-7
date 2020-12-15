/* eslint no-unused-vars: 0 */
/* eslint arrow-body-style: 0 */
import React from 'react';

interface ITimeMachineMenu {
  currentPosition: number;
  timeLength: number;
  getPreviousValue(step: number): void;
}

const TimeMachineMenu = ({ currentPosition, timeLength, getPreviousValue }: ITimeMachineMenu) => {
  return (
    <button type="button" onClick={() => getPreviousValue(+1)}>
      Previous
    </button>
  );
};

export default TimeMachineMenu;
