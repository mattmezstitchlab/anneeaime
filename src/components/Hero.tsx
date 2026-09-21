import { useEffect, useState } from 'react';
import { CinematicVideo } from './CinematicVideo';
import { useProgressInView } from '../hooks/useInView';

export function Hero() {
  const { ref, progress } = useProgressInView<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const p = progress; // 0 to 1 across hero
  const titleOpacity = Math.max(0, 1 - p * 2.2);
  const videoScale = 1 + p * 0.18;
  const videoY = -p * 80;
  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-ink"
    >
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${videoY}px, 0) scale(${videoScale})` }}
      >
        <CinematicVideo
          src="/videos/romance-01.mp4"
          poster="/images/poster-couple.jpg"
          priority
          pauseWhenHidden={false}
          className="w-full h-full"
          alt="AIME Wedding World opening"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
      </div>

      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-paper px-6"
        style={{ opacity: titleOpacity }}
      >
        <div className="flex flex-col items-center gap-6">
          <span
            className={`font-italiana text-[2.4rem] md:text-[3.4rem] tracking-[0.32em] -mb-2 ${
              mounted ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-2000`}
          >
            AIME
          </span>
          <div className="h-px w-16 bg-paper/60" />
          <h1 className="font-italiana text-[10vw] md:text-[8.2rem] lg:text-[10rem] leading-[0.86] tracking-[-0.03em] text-center max-w-[90vw]">
            THE WORLD
            <br />
            <span className="italic font-serif font-light">of Wedding</span>
          </h1>
          <div className="flex items-center gap-6 mt-6 smallcaps">
            <span className="block">365 Days</span>
            <span className="text-paper/50">·</span>
            <span className="block">365 Stories</span>
            <span className="text-paper/50">·</span>
            <span className="block">One World</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 flex items-end justify-between text-paper/70 smallcaps z-10">
        <div className="flex flex-col gap-1">
          <span>Wedding Journal</span>
          <span className="text-paper/45">Issue 2026</span>
        </div>
        <div className="hidden md:flex flex-col items-end gap-1">
          <span>Scroll to begin</span>
          <span className="text-paper/45">Day 001 below</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-paper/60" />
    </section>
  );
}