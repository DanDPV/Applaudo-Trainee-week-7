/* eslint no-unused-vars: 0 */
import React, { useEffect, useState } from 'react';

interface ITimeMachineMenu {
  currentPosition: number;
  timeLength: number;
  getPreviousValue(step: number): void;
}

const TimeMachineMenu = ({
  currentPosition,
  timeLength,
  getPreviousValue,
}: ITimeMachineMenu) => {
  const [isDisabledPrevious, setIsDisabledPrevious] = useState<boolean>(true);

  useEffect(() => {
    if (currentPosition > timeLength) setIsDisabledPrevious(true);
    else setIsDisabledPrevious(false);
  }, [currentPosition, timeLength]);

  return (
    <div className="menu-container">
      <button
        type="button"
        disabled={isDisabledPrevious}
        onClick={() => getPreviousValue(+1)}
      >
        Previous
      </button>
    </div>
  );
};

export default TimeMachineMenu;
