// source https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom
import { useEffect, useMemo, useState } from 'react';

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref]
  );

  useEffect(() => {
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect(); };
  }, []);

  return isIntersecting;
}
