import { useEffect, useRef } from 'react';

export function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('fade-in-hidden');
          el.classList.add('fade-in');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    el.classList.add('fade-in-hidden');
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
