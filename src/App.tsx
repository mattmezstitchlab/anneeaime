import { useEffect, useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { DayTransition } from './components/DayTransition';
import { ChapterMark } from './components/ChapterMark';
import { Composition } from './components/compositions';
import { Footer } from './components/Footer';
import { ALL_DAYS } from './data/days';
import type { Day } from './lib/types';

function App() {
  const [currentDay, setCurrentDay] = useState(1);
  const sectionRefs = useRef<Map<number, HTMLElement>>(new Map());
  const sentinelRefs = useRef<Map<number, HTMLElement>>(new Map());

  // Track which chapter is most prominently in view for the masthead day indicator.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const id = Number((visible[0].target as HTMLElement).dataset.dayId);
          if (!Number.isNaN(id)) setCurrentDay(id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: '-30% 0px -30% 0px' }
    );
    sentinelRefs.current.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative bg-paper text-ink overflow-x-clip">
      <Navigation currentDay={currentDay} totalDays={365} />
      <Hero />

      <div className="bg-paper">
        {ALL_DAYS.map((day: Day, idx: number) => (
          <section
            key={day.id}
            id={`day-${day.id}`}
            data-day-id={day.id}
            ref={(el) => {
              if (el) sentinelRefs.current.set(day.id, el);
              else sentinelRefs.current.delete(day.id);
            }}
            className="chapter"
          >
            {idx > 0 && idx % 6 === 0 && <DayTransition id={day.id} />}
            {idx > 0 && idx % 6 !== 0 && <ChapterMark id={day.id} />}
            <Composition day={day} />
          </section>
        ))}
      </div>

      <PreFooter />
      <Footer />
    </main>
  );
}

function PreFooter() {
  return (
    <section className="relative bg-paper text-ink py-32 md:py-56 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-10">
        <span className="micro text-photo">End of Issue 2026</span>
        <h3 className="font-italiana text-[10vw] md:text-[14rem] leading-[0.78] tracking-[-0.04em]">
          365
        </h3>
        <p className="font-serif italic text-[1.4rem] md:text-[1.8rem] text-photo max-w-2xl leading-[1.4]">
          Three hundred and sixty-five stories, one world. Tomorrow the year turns; the magazine begins again.
        </p>
        <a
          href="#hero"
          className="smallcaps text-ink border-b border-ink pb-1 hover:opacity-60 transition-opacity mt-6"
        >
          Return to the Beginning
        </a>
      </div>
    </section>
  );
}

export default App;