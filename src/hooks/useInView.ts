import { useEffect, useRef, useState } from 'react';

export function useInView<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: '50% 0px', threshold: 0 }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      options
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

export function useProgressInView<T extends Element = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const obs = new IntersectionObserver(
      () => {
        const update = () => {
          const rect = el.getBoundingClientRect();
          const viewport = window.innerHeight;
          const total = rect.height + viewport;
          const passed = viewport - rect.top;
          const p = Math.min(1, Math.max(0, passed / total));
          setProgress(p);
          raf = 0;
        };
        const onScroll = () => {
          if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
          cancelAnimationFrame(raf);
        };
      },
      { threshold: [0, 0.5, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, progress };
}