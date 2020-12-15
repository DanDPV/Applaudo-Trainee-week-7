/* eslint no-unused-vars: 0 */
import { useCallback, useEffect, useRef } from 'react';

const useTimeMachine = <T>(
  value: T,
): [T | undefined, (position: number) => T | undefined, number] => {
  const ref = useRef<T>();
  const history = useRef<T[]>([]);

  const getPreviousValue = (position: number) => history.current[position];

  useEffect(() => {
    ref.current = value;
    history.current.unshift(value);
  }, [value]);

  return [ref.current, getPreviousValue, history.current.length];
};

export default useTimeMachine;
