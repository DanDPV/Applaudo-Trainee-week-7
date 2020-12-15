/* eslint no-unused-vars: 0 */
import { useCallback, useEffect, useRef } from 'react';

const useTimeMachine = <T>(
  value: T,
  isTraveling: boolean,
): [T | undefined, (position: number) => T, number] => {
  const ref = useRef<T>();
  const history = useRef<T[]>([]);

  const getPreviousValue = useCallback(
    (position: number) => history.current[position],
    [value],
  );

  useEffect(() => {
    ref.current = value;
    if (!isTraveling) {
      history.current.unshift(value);
    }
  }, [value]);

  return [ref.current, getPreviousValue, history.current.length];
};

export default useTimeMachine;
