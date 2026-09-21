import { useEffect, useState } from 'react';

interface Props {
  currentDay: number;
  totalDays?: number;
}

export function Navigation({ currentDay, totalDays = 365 }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        scrolled ? 'py-3 backdrop-blur-md bg-paper/70' : 'py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between text-ink">
        <a href="#hero" className="font-italiana text-[1.4rem] tracking-[0.32em]">
          AIME
        </a>
        <div className="hidden md:flex items-center gap-10 smallcaps">
          <span>Wedding Journal</span>
          <span>Issue 2026</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline smallcaps text-photo">Day</span>
          <span className="font-italiana text-[1.05rem] tracking-[0.1em] tabular-nums">
            {String(currentDay).padStart(3, '0')} <span className="text-photo">/</span>{' '}
            <span className="text-photo">{totalDays}</span>
          </span>
        </div>
      </div>
    </header>
  );
}