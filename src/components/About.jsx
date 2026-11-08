import { useEffect, useState } from 'react';
import { about } from '../data';
import { useInView } from '../hooks';
import SectionTitle from './SectionTitle';

// "1+ Yr" -> { num: 1, suffix: '+ Yr' }, "40%" -> { num: 40, suffix: '%' }
function parse(value) {
  const m = value.match(/^(\d+)(.*)$/);
  return m ? { num: Number(m[1]), suffix: m[2].trim() } : { num: null, suffix: value };
}

function Counter({ value, label, start }) {
  const { num, suffix } = parse(value);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start || num === null) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return setN(num);
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(Math.round(num * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, num]);

  return (
    <div className="counter">
      <div className="counter-value" aria-label={value}>
        <span aria-hidden="true">{num === null ? '' : n}</span>
        <sup aria-hidden="true">{suffix}</sup>
      </div>
      <p>{label}</p>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.3 });
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle kicker="By the numbers" title="A year of shipping" muted="production UI" rest="for real users." />
        <div className="counters" ref={ref}>
          {about.stats.map((s) => (
            <Counter key={s.label} {...s} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
