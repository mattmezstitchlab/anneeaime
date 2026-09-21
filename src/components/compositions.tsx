import type { Day } from '../lib/types';
import { CinematicVideo } from './CinematicVideo';
import { ChapterMeta, ChapterFooter } from './ChapterMeta';
import { BodyText } from './BodyText';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useInView } from '../hooks/useInView';

// ======================== Helpers ========================

function DayMegaNumber({ id, className = '' }: { id: number; className?: string }) {
  return (
    <span className={`font-italiana leading-[0.78] tracking-[-0.04em] tabular-nums ${className}`}>
      {String(id).padStart(3, '0')}
    </span>
  );
}

function ChapterTitle({
  day,
  size = 'lg',
  variant = 'paper',
}: {
  day: Day;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'paper' | 'ink';
}) {
  const tone = variant === 'ink' ? 'text-paper' : 'text-ink';
  const sizes = {
    sm: 'text-[2.5rem] md:text-[3rem]',
    md: 'text-[3rem] md:text-[4.5rem]',
    lg: 'text-[4rem] md:text-[7rem] lg:text-[8.5rem]',
    xl: 'text-[5rem] md:text-[9rem] lg:text-[12rem]',
    '2xl': 'text-[6rem] md:text-[12rem] lg:text-[16rem]',
    '3xl': 'text-[8rem] md:text-[16rem] lg:text-[22rem]',
  };
  return (
    <h2 className={`font-italiana leading-[0.88] tracking-[-0.035em] ${tone} ${sizes[size]}`}>
      {day.title}
    </h2>
  );
}

function ChapterSubtitle({ day, variant = 'paper' }: { day: Day; variant?: 'paper' | 'ink' }) {
  const muted = variant === 'ink' ? 'text-paper/60' : 'text-photo';
  return (
    <p className={`font-serif italic font-light text-[1.25rem] md:text-[1.4rem] leading-[1.4] max-w-[36rem] ${muted}`}>
      {day.subtitle}
    </p>
  );
}

function ChapterDayIndex({ day, variant = 'paper' }: { day: Day; variant?: 'paper' | 'ink' }) {
  const muted = variant === 'ink' ? 'text-paper/65' : 'text-photo';
  return (
    <div className={`flex items-center gap-4 ${muted}`}>
      <span className="micro">Day</span>
      <span className="font-italiana text-[1.2rem] tracking-[0.05em] tabular-nums">
        {String(day.id).padStart(3, '0')}
      </span>
      <span className="text-current opacity-50">/</span>
      <span className="smallcaps">{day.date}</span>
      <span className="text-current opacity-50">·</span>
      <span className="smallcaps">{day.city}</span>
      <span className="text-current opacity-50">/</span>
      <span className="smallcaps">{day.country}</span>
    </div>
  );
}

function Poster({ src, alt, className = '', priority = false, objectPosition = 'center' }: { src: string; alt: string; className?: string; priority?: boolean; objectPosition?: string }) {
  const { ref, inView } = useInView<HTMLImageElement>();
  return (
    <div ref={ref} className={`relative overflow-hidden bg-ink ${className}`}>
      {inView ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          decoding="async"
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
      ) : (
        <div className="w-full h-full" />
      )}
    </div>
  );
}

// ======================== 1. Full-bleed video + monumental title ========================
export function FullBleedVideo({ day }: { day: Day }) {
  return (
    <article className="relative bg-ink text-paper min-h-[110vh] flex items-center justify-center overflow-hidden">
      <CinematicVideo
        src={day.video.src}
        poster={day.video.poster}
        aspect="auto"
        className="absolute inset-0 w-full h-full"
        priority={day.id <= 5}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 max-w-[1200px] w-full px-6 md:px-12 py-32 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <ChapterDayIndex day={day} variant="ink" />
          <div className="font-italiana text-[10vw] md:text-[14rem] lg:text-[18rem] leading-[0.8] tracking-[-0.04em] opacity-20 absolute right-6 md:right-12 top-12 pointer-events-none">
            {String(day.id).padStart(3, '0')}
          </div>
        </div>
        <ChapterTitle day={day} size="2xl" variant="ink" />
        <ChapterSubtitle day={day} variant="ink" />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <ChapterMeta day={day} variant="ink" />
          </div>
          <div className="md:col-span-2">
            <BodyText body={day.body} variant="ink" />
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 2. Vertical video + lateral title ========================
export function VerticalVideoSide({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4 order-2 md:order-1 flex flex-col gap-8">
          <ChapterDayIndex day={day} />
          <ChapterTitle day={day} size="lg" />
          <ChapterSubtitle day={day} />
          <BodyText body={day.body} />
          <ChapterFooter day={day} />
        </div>
        <div className="md:col-span-7 md:col-start-6 order-1 md:order-2">
          <CinematicVideo
            src={day.video.src}
            poster={day.video.poster}
            aspect="9/16"
            className="w-full h-[80vh]"
          />
        </div>
      </div>
    </article>
  );
}

// ======================== 3. Panoramic image ========================
export function PanoramicImage({ day }: { day: Day }) {
  return (
    <article className="bg-ivory text-ink py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <ChapterDayIndex day={day} />
            <ChapterTitle day={day} size="lg" />
          </div>
          <ChapterMeta day={day} />
        </div>
        <CinematicVideo src={day.video.src} poster={day.video.poster} aspect="21/9" className="w-full" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3 smallcaps text-photo">
            <span className="micro">Section</span>
            <span className="block mt-1">{day.category}</span>
          </div>
          <div className="md:col-span-7 md:col-start-5">
            <ChapterSubtitle day={day} />
            <div className="h-8" />
            <BodyText body={day.body} />
            <ChapterFooter day={day} />
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 4. Split screen ========================
export function SplitScreen({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[100vh]">
        <div className="relative">
          <CinematicVideo
            src={day.video.src}
            poster={day.video.poster}
            aspect="auto"
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-10 px-6 md:px-16 py-24 md:py-32 justify-center">
          <ChapterDayIndex day={day} />
          <ChapterTitle day={day} size="lg" />
          <ChapterSubtitle day={day} />
          <BodyText body={day.body} />
          <ChapterMeta day={day} />
          <ChapterFooter day={day} />
        </div>
      </div>
    </article>
  );
}

// ======================== 5. Image + monumental typography ========================
export function ImageTypography({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink py-24 md:py-40">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
          <DayMegaNumber id={day.id} className="text-[8rem] md:text-[14rem] leading-[0.5] text-ink/10" />
          <div className="flex flex-col gap-3">
            <ChapterDayIndex day={day} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-7">
            <CinematicVideo src={day.video.src} poster={day.video.poster} aspect="4/5" className="w-full" />
          </div>
          <div className="md:col-span-5 md:pt-24 flex flex-col gap-8">
            <ChapterTitle day={day} size="xl" />
            <ChapterSubtitle day={day} />
            <BodyText body={day.body} />
            <ChapterFooter day={day} />
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 6. Floating text over video ========================
export function TextFloatingVideo({ day }: { day: Day }) {
  return (
    <article className="relative bg-ink text-paper min-h-[100vh] flex flex-col">
      <CinematicVideo
        src={day.video.src}
        poster={day.video.poster}
        aspect="auto"
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />
      <div className="relative z-10 mt-auto p-6 md:p-16 max-w-[1400px] mx-auto w-full flex flex-col gap-10">
        <ChapterDayIndex day={day} variant="ink" />
        <ChapterTitle day={day} size="xl" variant="ink" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <BodyText body={day.body} variant="ink" />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ChapterMeta day={day} variant="ink" />
            <div className="h-6" />
            <ChapterFooter day={day} variant="ink" />
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 7. Photo collage ========================
export function PhotoCollage({ day }: { day: Day }) {
  // Build a collage out of video poster + (optional) day.images + a few library posters
  const img2 = day.images?.[0]?.src ?? pickCollageImage(day.id, 1);
  const img3 = pickCollageImage(day.id, 2);
  return (
    <article className="bg-bone text-ink py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-3 max-w-2xl">
            <ChapterDayIndex day={day} />
            <ChapterTitle day={day} size="lg" />
          </div>
          <ChapterMeta day={day} />
        </div>

        <div className="grid grid-cols-12 grid-rows-6 gap-3 md:gap-5 h-[120vh] min-h-[700px]">
          <div className="col-span-12 md:col-span-8 row-span-3">
            <CinematicVideo src={day.video.src} poster={day.video.poster} className="w-full h-full" />
          </div>
          <div className="col-span-6 md:col-span-4 row-span-2">
            <Poster src={img2} alt={day.title} className="w-full h-full" />
          </div>
          <div className="col-span-6 md:col-span-4 row-span-4 md:row-span-4">
            <Poster src={img3} alt={day.title} className="w-full h-full" />
          </div>
          <div className="col-span-12 md:col-span-8 row-span-3">
            <div className="w-full h-full flex flex-col justify-center gap-6 bg-paper p-8 md:p-14">
              <ChapterSubtitle day={day} />
              <BodyText body={day.body.slice(0, 2)} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 smallcaps text-photo">{day.category}</div>
          <div className="md:col-span-9">
            <BodyText body={day.body.slice(2)} />
            <ChapterFooter day={day} />
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 8. Asymmetric ========================
export function Asymmetric({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
        <div className="md:col-span-7 md:col-start-1 order-2 md:order-1">
          <CinematicVideo src={day.video.src} poster={day.video.poster} aspect={"3/4" as any} className="w-full md:h-[90vh]" />
        </div>
        <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 md:pt-32 flex flex-col gap-8">
          <ChapterDayIndex day={day} />
          <ChapterTitle day={day} size="lg" />
          <ChapterSubtitle day={day} />
          <BodyText body={day.body} />
          <ChapterMeta day={day} />
          <ChapterFooter day={day} />
        </div>
      </div>
    </article>
  );
}

// ======================== 9. Centered image, vast negative space ========================
export function CenteredImageNegative({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink py-32 md:py-56">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-24">
        <div className="text-center flex flex-col items-center gap-8">
          <DayMegaNumber id={day.id} className="text-[12rem] md:text-[24rem] leading-[0.75] text-ink/8" />
          <ChapterDayIndex day={day} />
        </div>
        <div className="max-w-[820px] mx-auto w-full aspect-[4/5]">
          <CinematicVideo src={day.video.src} poster={day.video.poster} className="w-full h-full" />
        </div>
        <div className="text-center max-w-[44rem] mx-auto flex flex-col gap-8">
          <ChapterTitle day={day} size="xl" />
          <ChapterSubtitle day={day} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
          <div className="md:col-span-7 md:col-start-3">
            <BodyText body={day.body} />
          </div>
        </div>
        <div className="text-center mt-16">
          <ChapterFooter day={day} />
        </div>
      </div>
    </article>
  );
}

// ======================== 10. Double-page ========================
export function DoublePage({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-y border-ink/10">
        {/* Page - left */}
        <div className="p-6 md:p-16 py-24 md:py-32 flex flex-col gap-10 border-r border-ink/10">
          <ChapterDayIndex day={day} />
          <ChapterTitle day={day} size="lg" />
          <ChapterSubtitle day={day} />
          <CinematicVideo src={day.video.src} poster={day.video.poster} aspect="4/5" className="w-full md:mt-6" />
        </div>
        {/* Page - right */}
        <div className="p-6 md:p-16 py-24 md:py-32 flex flex-col gap-10">
          <ChapterMeta day={day} />
          <BodyText body={day.body} />
          <ChapterFooter day={day} />
          <Poster src={pickCollageImage(day.id, 3)} alt={day.title} className="w-full aspect-[4/3] mt-6" />
        </div>
      </div>
    </article>
  );
}

// ======================== 11. Typography-dominant ========================
export function TypographyDominant({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-9 md:col-start-2 flex flex-col gap-16">
          <ChapterDayIndex day={day} />
          <ChapterTitle day={day} size="3xl" />
          <ChapterSubtitle day={day} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <BodyText body={day.body} />
            <div className="flex flex-col gap-8">
              <ChapterMeta day={day} />
              <div className="aspect-[4/5]">
                <CinematicVideo src={day.video.src} poster={day.video.poster} className="w-full h-full" />
              </div>
              <ChapterFooter day={day} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 12. Video + photo sequence ========================
export function VideoPhotoSequence({ day }: { day: Day }) {
  const img2 = pickCollageImage(day.id, 1);
  const img3 = pickCollageImage(day.id, 2);
  return (
    <article className="bg-ink text-paper py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <div className="flex flex-col gap-3">
          <ChapterDayIndex day={day} variant="ink" />
        </div>
        <div className="aspect-[21/9]">
          <CinematicVideo src={day.video.src} poster={day.video.poster} className="w-full h-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <ChapterTitle day={day} size="xl" variant="ink" />
            <div className="h-6" />
            <ChapterSubtitle day={day} variant="ink" />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ChapterMeta day={day} variant="ink" />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-7 aspect-[16/10]">
            <Poster src={img2} alt={day.title} className="w-full h-full" />
          </div>
          <div className="col-span-12 md:col-span-5 aspect-[4/5]">
            <Poster src={img3} alt={day.title} className="w-full h-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <BodyText body={day.body} variant="ink" />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <ChapterFooter day={day} variant="ink" />
          </div>
        </div>
      </div>
    </article>
  );
}

// ======================== 13. Vertical title ========================
export function VerticalTitle({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink min-h-screen">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-10 py-24 md:py-32">
        <div className="md:col-span-3 md:sticky md:top-32 md:self-start">
          <ChapterDayIndex day={day} />
          <div className="h-6" />
          <DayMegaNumber id={day.id} className="text-[8rem] md:text-[14rem] leading-[0.78]" />
        </div>
        <div className="md:col-span-8 md:col-start-5 flex flex-col gap-10">
          <ChapterTitle day={day} size="xl" />
          <ChapterSubtitle day={day} />
          <CinematicVideo src={day.video.src} poster={day.video.poster} aspect="16/9" className="w-full" />
          <BodyText body={day.body} />
          <ChapterMeta day={day} />
          <ChapterFooter day={day} />
        </div>
      </div>
    </article>
  );
}

// ======================== 14. Photo essay ========================
export function PhotoEssay({ day }: { day: Day }) {
  const imgs = [pickCollageImage(day.id, 1), pickCollageImage(day.id, 2), pickCollageImage(day.id, 3), pickCollageImage(day.id, 4)];
  return (
    <article className="bg-paper text-ink py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex flex-col gap-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="flex flex-col gap-3">
            <ChapterDayIndex day={day} />
            <ChapterTitle day={day} size="lg" />
          </div>
          <p className="font-serif italic text-photo text-[1.1rem] max-w-md">{day.subtitle}</p>
        </div>
        <div className="grid grid-cols-12 gap-3 md:gap-5">
          <div className="col-span-12 md:col-span-8 aspect-[16/10]">
            <CinematicVideo src={day.video.src} poster={day.video.poster} className="w-full h-full" />
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 md:gap-5">
            <div className="aspect-[4/5]"><Poster src={imgs[0]} alt="" className="w-full h-full" /></div>
          </div>
          <div className="col-span-7 md:col-span-5 aspect-[4/5]"><Poster src={imgs[1]} alt="" className="w-full h-full" /></div>
          <div className="col-span-5 md:col-span-3 flex flex-col gap-2 justify-end">
            <span className="micro text-photo">Frame 003</span>
            <p className="font-serif italic text-[1rem] leading-relaxed">{day.caption}</p>
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[3/4]"><Poster src={imgs[2]} alt="" className="w-full h-full" /></div>
          <div className="col-span-12 md:col-span-7 aspect-[16/10]"><Poster src={imgs[3]} alt="" className="w-full h-full" /></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-8">
          <div className="md:col-span-2"><ChapterMeta day={day} /></div>
          <div className="md:col-span-7"><BodyText body={day.body} /></div>
          <div className="md:col-span-3"><ChapterFooter day={day} /></div>
        </div>
      </div>
    </article>
  );
}

// ======================== 15. Typographic essay ========================
export function TypographicEssay({ day }: { day: Day }) {
  return (
    <article className="bg-paper text-ink py-24 md:py-40">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 flex flex-col gap-16">
        <ChapterDayIndex day={day} />
        <ChapterTitle day={day} size="2xl" />
        <ChapterSubtitle day={day} />
        <ChapterMeta day={day} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-[1.4rem] md:text-[1.6rem] leading-[1.35] font-serif">
          {day.body.map((par, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? 'md:col-span-2 first-letter:font-italiana first-letter:text-[6rem] md:first-letter:text-[10rem] first-letter:leading-[0.7] first-letter:float-left first-letter:mr-6 first-letter:mt-2 first-letter:font-light'
                  : ''
              }
            >
              {par.text}
            </p>
          ))}
        </div>
        <div className="aspect-[21/9] mt-8">
          <CinematicVideo src={day.video.src} poster={day.video.poster} className="w-full h-full" />
        </div>
        <ChapterFooter day={day} />
      </div>
    </article>
  );
}

// ======================== Collage image picker ========================
import { POSTERS } from '../data/posters';

function pickCollageImage(seed: number, offset: number): string {
  const keys = Object.keys(POSTERS);
  return POSTERS[keys[(seed * 7 + offset * 13) % keys.length]].src;
}

// ======================== Dispatcher ========================
export function Composition({ day }: { day: Day }) {
  switch (day.composition) {
    case 'full-bleed-video': return <FullBleedVideo day={day} />;
    case 'vertical-video-side': return <VerticalVideoSide day={day} />;
    case 'panoramic-image': return <PanoramicImage day={day} />;
    case 'split-screen': return <SplitScreen day={day} />;
    case 'image-typography': return <ImageTypography day={day} />;
    case 'text-floating-video': return <TextFloatingVideo day={day} />;
    case 'photo-collage': return <PhotoCollage day={day} />;
    case 'asymmetric': return <Asymmetric day={day} />;
    case 'centered-image-negative': return <CenteredImageNegative day={day} />;
    case 'double-page': return <DoublePage day={day} />;
    case 'typography-dominant': return <TypographyDominant day={day} />;
    case 'video-photo-sequence': return <VideoPhotoSequence day={day} />;
    case 'vertical-title': return <VerticalTitle day={day} />;
    case 'photo-essay': return <PhotoEssay day={day} />;
    case 'typographic-essay': return <TypographicEssay day={day} />;
    default: return <FullBleedVideo day={day} />;
  }
}