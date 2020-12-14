import { useEffect, useRef } from 'react';

const useTimeMachine = <T> (value: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [ref.current];
};

export default useTimeMachine;
