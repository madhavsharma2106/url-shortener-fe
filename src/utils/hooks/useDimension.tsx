/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

interface ISize {
  width: number;
  height: number;
}

export function useDimension<T extends HTMLElement = HTMLDivElement>(): [
  (node: T | null) => void,
  ISize,
] {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<ISize>({
    width: 0,
    height: 0,
  });

  const handleSize = useCallback(() => {
    setSize({
      width: ref?.offsetWidth || 0,
      height: ref?.offsetHeight || 0,
    });
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [handleSize]);

  useLayoutEffect(() => {
    handleSize();
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  return [setRef, size];
}
