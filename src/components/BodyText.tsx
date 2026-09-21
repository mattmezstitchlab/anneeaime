import type { Day } from '../lib/types';

interface Props {
  body: Day['body'];
  variant?: 'paper' | 'ink';
}

export function BodyText({ body, variant = 'paper' }: Props) {
  const tone = variant === 'ink' ? 'text-paper' : 'text-ink';
  return (
    <div className={`max-w-[34rem] flex flex-col gap-7 ${tone}`}>
      {body.map((p, i) => (
        <p
          key={i}
          className={`font-serif text-[1.25rem] md:text-[1.35rem] leading-[1.45] tracking-[-0.005em] ${
            i === 0 ? 'first-letter:font-italiana first-letter:text-[3.6rem] first-letter:leading-[0.85] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-light' : ''
          } ${p.emphasis ? 'italic' : ''}`}
        >
          {p.text}
        </p>
      ))}
    </div>
  );
}