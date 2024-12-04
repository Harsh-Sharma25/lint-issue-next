import { useCallback, useRef } from 'react';

export const DEFAULT_DEBOUNCE_TIME = 500;

export const useDebouncedCallback = <T extends (...args: any[]) => void>(
  func: T,
  delay: number = DEFAULT_DEBOUNCE_TIME
) => {
  const timeout = useRef<number | undefined>(undefined);

  return useCallback(
    (...args: Parameters<T>) => {
      const debounceTimeout = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = window.setTimeout(debounceTimeout, delay);
    },
    // [func, delay]
    []
  );
};
