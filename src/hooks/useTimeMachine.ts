import { useCallback, useEffect, useRef } from 'react';

const useTimeMachine = <T>(value: T) => {
  const ref = useRef<T>();
  const history = useRef<T[]>([]);

  const getPreviousValue = useCallback(
    (position: number) => history.current[position],
    [value],
  );

  useEffect(() => {
    ref.current = value;
    history.current.unshift(value);
  }, [value]);

  return [ref.current, getPreviousValue];
};

export default useTimeMachine;
