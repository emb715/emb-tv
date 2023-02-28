import {useRef, useEffect} from 'react'

function useInterval(callback: () => void, delay: number) {
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const cb = () => savedCallback.current();
    intervalRef.current = setInterval(cb, delay);
    return () => clearInterval(intervalRef.current);
    
  }, [delay]);
  return intervalRef;
}

export { useInterval }
