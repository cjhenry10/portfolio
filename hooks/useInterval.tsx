import {useRef, useEffect} from 'react'

const useInterval = (callback: Function, delay: number) => {
  const intervalRef = useRef<any>();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(()=> {
    intervalRef.current = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(intervalRef.current);
  }, [delay]);

  return intervalRef;

}

export default useInterval