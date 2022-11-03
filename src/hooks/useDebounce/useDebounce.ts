import { useEffect, useRef, useState } from 'react';
export const useDebounce = <T, F extends (...args: Parameters<F>) => ReturnType<F>>(
  value: T,
  debouncedFunction?: F,
  delay = 500,
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  const isMounted = useRef(false);

  useEffect(
    (...args: Parameters<F>) => {
      if (!isMounted.current) {
        isMounted.current = true;
        return;
      }

      const timer = setTimeout(() => {
        if (debouncedFunction !== undefined) {
          debouncedFunction(...args);
        }

        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    },
    [value],
  );

  return debouncedValue;
};
