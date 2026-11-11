'use client';

import { useState, useEffect, useRef } from 'react';

export function useAnimatedCounter(
  target: number,
  duration: number = 2000,
  isVisible: boolean = true
): number {
  const [current, setCurrent] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasStartedRef.current) return;
    hasStartedRef.current = true;

    function easeOutQuart(t: number): number {
      return 1 - Math.pow(1 - t, 4);
    }

    function animate(timestamp: number) {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const value = Math.round(easedProgress * target);

      setCurrent(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [target, duration, isVisible]);

  return current;
}
