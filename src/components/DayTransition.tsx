import { useInView } from '../hooks/useInView';

interface Props {
  id: number;
}

export function DayTransition({ id }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const next = id;
  return (
    <div ref={ref} className="relative w-full bg-ink text-paper py-32 md:py-48 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,243,238,0.04)_0%,transparent_60%)]" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-6">
        <span className={`smallcaps text-paper/60 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Next Chapter
        </span>
        <div
          className={`font-italiana leading-[0.78] tracking-[-0.04em] text-[18vw] md:text-[20rem] lg:text-[26rem] transition-all duration-1500 ${
            inView ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
          }`}
        >
          {String(next).padStart(3, '0')}
        </div>
        <div
          className={`h-px bg-paper/40 transition-all duration-1500 delay-300 ${inView ? 'w-32 opacity-100' : 'w-0 opacity-0'}`}
        />
        <span className={`smallcaps text-paper/60 transition-opacity duration-1000 delay-500 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Day {String(next).padStart(3, '0')}
        </span>
      </div>
    </div>
  );
}