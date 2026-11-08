import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

// Card ke media panel ke andar image gallery: scroll-snap slides (swipe/trackpad),
// prev/next buttons aur dots. Ek hi image ho to controls nahi dikhte.
export default function ProjectGallery({ images, name, label }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const multi = images.length > 1;

  // Scroll position se active slide nikalo (swipe ke baad bhi dots sync rahein)
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !multi) return;
    let frame;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setActive(Math.round(track.scrollLeft / track.clientWidth));
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      track.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [multi]);

  const goTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + images.length) % images.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' });
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(active + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(active - 1); }
  };

  return (
    <div
      className="gallery"
      role={multi ? 'region' : undefined}
      aria-roledescription={multi ? 'carousel' : undefined}
      aria-label={multi ? `${name} screenshots` : undefined}
      onKeyDown={multi ? onKeyDown : undefined}
    >
      <div className="gallery-track" ref={trackRef} tabIndex={multi ? 0 : undefined}>
        {images.map((src, i) => (
          <figure
            key={src}
            className="gallery-slide"
            style={{ '--img': `url(${src})` }}
            aria-roledescription={multi ? 'slide' : undefined}
            aria-label={multi ? `${i + 1} of ${images.length}` : undefined}
          >
            <img
              src={src}
              alt={`${name} screenshot${multi ? ` ${i + 1}` : ''}`}
              loading="lazy"
              draggable="false"
            />
          </figure>
        ))}
      </div>

      <span className="media-label">
        {label}
        {multi && ` · ${active + 1}/${images.length}`}
      </span>

      {multi && (
        <>
          <button type="button" className="gallery-btn prev" onClick={() => goTo(active - 1)} aria-label="Previous screenshot">
            <Icon name="chevronLeft" size={18} />
          </button>
          <button type="button" className="gallery-btn next" onClick={() => goTo(active + 1)} aria-label="Next screenshot">
            <Icon name="chevronRight" size={18} />
          </button>
          <div className="gallery-dots">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                className={i === active ? 'active' : ''}
                onClick={() => goTo(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === active ? 'true' : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
