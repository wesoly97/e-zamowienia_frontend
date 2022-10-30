import { useEffect, useState } from 'react';
export const useDebounce = <T, F extends (...args: Parameters<F>) => ReturnType<F>>(
  value: T,
  debouncedFunction?: F,
  delay = 500,
) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(
    (...args: Parameters<F>) => {
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
    [delay, debouncedFunction, value],
  );

  return debouncedValue;
};
