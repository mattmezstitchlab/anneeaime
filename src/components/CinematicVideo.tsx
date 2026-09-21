import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Props {
  src: string;
  poster?: string;
  aspect?: '16/9' | '9/16' | '4/5' | '1/1' | '21/9' | 'auto';
  className?: string;
  priority?: boolean;
  pauseWhenHidden?: boolean;
  objectPosition?: string;
  alt?: string;
}

export function CinematicVideo({
  src,
  poster,
  aspect = 'auto',
  className = '',
  priority = false,
  pauseWhenHidden = true,
  objectPosition = 'center',
  alt = '',
}: Props) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v || !pauseWhenHidden) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, [pauseWhenHidden]);

  const aspectClass = aspect === 'auto' ? '' : `aspect-[${aspect}]`;

  return (
    <div className={`relative overflow-hidden bg-ink ${aspectClass} ${className}`}>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ objectPosition }}
        />
      )}
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay={priority || !reduced}
        preload={priority ? 'auto' : 'metadata'}
        onLoadedData={() => setLoaded(true)}
        className={`video-fade ${loaded ? 'is-loaded' : ''} absolute inset-0 w-full h-full object-cover`}
        style={{ objectPosition }}
        aria-label={alt}
      />
    </div>
  );
}