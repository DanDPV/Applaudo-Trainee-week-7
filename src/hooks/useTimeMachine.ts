import { useEffect, useRef } from 'react';

const useTimeMachine = <T> (value: T) => {
  const ref = useRef<T>();
  const history = useRef<T[]>([]);

  useEffect(() => {
    ref.current = value;
    history.current.unshift(value);
  }, [value]);

  return [ref.current];
};

export default useTimeMachine;
