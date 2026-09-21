// Sits between chapters — a tiny breath of editorial typography
import { useInView } from '../hooks/useInView';

interface Props {
  id: number;
}

export function ChapterMark({ id }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div ref={ref} className="relative w-full bg-paper text-ink py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex items-center gap-6">
          <span className={`font-italiana text-[5rem] md:text-[9rem] leading-[0.78] tabular-nums transition-all duration-1500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {String(id).padStart(3, '0')}
          </span>
          <div className="flex flex-col gap-1">
            <span className="micro text-photo">Day</span>
            <span className="font-italiana text-[1.2rem] tracking-[0.05em]">{String(id).padStart(3, '0')} / 365</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <span className="micro text-photo">AIME Wedding Journal</span>
          <span className="smallcaps text-photo">Issue 2026 · Story {String(id).padStart(3, '0')}</span>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-ink/10" />
    </div>
  );
}