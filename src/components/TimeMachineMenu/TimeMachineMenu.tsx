/* eslint no-unused-vars: 0 */
import React, { useEffect, useState } from 'react';
import 'components/TimeMachineMenu/TimeMachineMenu.scss';

interface ITimeMachineMenu {
  currentPosition: number | undefined;
  timeLength: number;
  getPreviousValue(step: number): void;
  handleResume(): void;
}

const TimeMachineMenu = ({
  currentPosition,
  timeLength,
  getPreviousValue,
  handleResume,
}: ITimeMachineMenu) => {
  const [isDisabledPrevious, setIsDisabledPrevious] = useState<boolean>(true);
  const [isDisabledNext, setIsDisabledNext] = useState<boolean>(true);

  useEffect(() => {
    if (
      timeLength === 0
      || currentPosition === (timeLength > 1 ? timeLength - 1 : timeLength)
    ) {
      setIsDisabledPrevious(true);
    } else setIsDisabledPrevious(false);

    if (currentPosition === 0) setIsDisabledNext(true);
    else setIsDisabledNext(false);
  }, [currentPosition, timeLength]);

  return (
    <div className="menu-container">
      <button
        type="button"
        className="menu-option"
        disabled={isDisabledPrevious}
        onClick={() => getPreviousValue(+1)}
      >
        Previous
      </button>
      <button
        type="button"
        className="menu-option"
        disabled={isDisabledNext}
        onClick={() => getPreviousValue(-1)}
      >
        Next
      </button>
      <button
        type="button"
        className="menu-option"
        disabled={isDisabledNext}
        onClick={() => handleResume()}
      >
        Resume
      </button>
    </div>
  );
};

export default TimeMachineMenu;
