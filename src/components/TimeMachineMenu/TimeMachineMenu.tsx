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
  const [isDisabledNext, setIsDisabledNext] = useState<boolean>(true);

  useEffect(() => {
    if (timeLength === 0 || currentPosition === (timeLength - 1)) setIsDisabledPrevious(true);
    else setIsDisabledPrevious(false);

    if (currentPosition === 0) setIsDisabledNext(true);
    else setIsDisabledNext(false);
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
      <button
        type="button"
        disabled={isDisabledNext}
        onClick={() => getPreviousValue(-1)}
      >
        Next
      </button>
    </div>
  );
};

export default TimeMachineMenu;
