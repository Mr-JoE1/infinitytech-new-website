import { useState, useEffect, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

interface UseIntersectionObserverReturn<T extends HTMLElement = HTMLDivElement> {
  ref: RefObject<T>;
  isVisible: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px',
}: UseIntersectionObserverProps = {}): UseIntersectionObserverReturn<T> => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (ref.current && !observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold,
          rootMargin,
        }
      );

      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
