import { useEffect, useState } from 'react';
import { testimonials } from '../data';
import SectionTitle from './SectionTitle';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="section alt">
      <div className="container">
        <SectionTitle kicker="What people say" title="Testimonials" />
        <div
          className="testimonial card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-live="polite"
        >
          <p className="quote">“{t.text}”</p>
          <div className="author">
            <div className="author-avatar" aria-hidden="true">{t.name.charAt(0)}</div>
            <div>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>
        </div>
        <div className="dots" role="group" aria-label="Choose testimonial">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              className={i === index ? 'active' : ''}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-pressed={i === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
