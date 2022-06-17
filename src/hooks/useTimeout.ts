import { useEffect, useRef } from "react";

// reference: https://www.joshwcomeau.com/snippets/react-hooks/use-timeout/
export default function useTimeout(callback: (...args: unknown[]) => unknown, delay: number | null) {
  const timeoutRef = useRef<number|undefined>(undefined);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      timeoutRef.current = window.setTimeout(tick, delay);
      return () => window.clearTimeout(timeoutRef.current);
    }
  }, [delay]);
  return timeoutRef;
};
