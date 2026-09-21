import type { Day } from '../lib/types';

interface Props {
  day: Day;
  variant?: 'paper' | 'ink';
}

export function ChapterMeta({ day, variant = 'paper' }: Props) {
  const tone = variant === 'ink' ? 'text-paper' : 'text-ink';
  const muted = variant === 'ink' ? 'text-paper/60' : 'text-photo';
  const line = variant === 'ink' ? 'border-paper/15' : 'border-ink/15';
  return (
    <div className={`flex flex-col gap-6 ${tone}`}>
      <div className={`flex items-center gap-3 pb-3 border-b ${line}`}>
        <span className={`smallcaps ${muted}`}>AIME Wedding Journal · Issue 2026</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4">
        <div className="flex flex-col gap-1">
          <span className={`micro ${muted}`}>Date</span>
          <span className="font-italiana text-[1.05rem] tracking-[0.05em]">{day.date}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className={`micro ${muted}`}>Place</span>
          <span className="font-italiana text-[1.05rem] tracking-[0.05em]">{day.city}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className={`micro ${muted}`}>Country</span>
          <span className="font-italiana text-[1.05rem] tracking-[0.05em]">{day.country}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className={`micro ${muted}`}>Coordinates</span>
          <span className="font-italiana text-[1.05rem] tracking-[0.05em]">{day.coordinates}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={`micro ${muted}`}>Category</span>
        <span className="font-italiana text-[1.05rem] tracking-[0.05em]">{day.category}</span>
        <span className={`micro ${muted}`}>·</span>
        <span className={`micro ${muted}`}>Story</span>
        <span className="font-italiana text-[1.05rem] tracking-[0.05em]">{String(day.id).padStart(3, '0')}</span>
      </div>
    </div>
  );
}

export function ChapterFooter({ day, variant = 'paper' }: Props) {
  const tone = variant === 'ink' ? 'text-paper' : 'text-ink';
  const muted = variant === 'ink' ? 'text-paper/60' : 'text-photo';
  const line = variant === 'ink' ? 'border-paper/15' : 'border-ink/15';
  return (
    <div className={`mt-24 pt-6 border-t ${line} flex flex-col md:flex-row md:items-end md:justify-between gap-4 ${tone}`}>
      <div className="flex flex-col gap-2 max-w-md">
        <span className={`micro ${muted}`}>Caption</span>
        <p className="font-serif italic text-[0.95rem] leading-relaxed">{day.caption}</p>
      </div>
      <div className="flex flex-col gap-2 md:items-end">
        <span className={`micro ${muted}`}>Credit</span>
        <span className="smallcaps">{day.credit}</span>
      </div>
    </div>
  );
}