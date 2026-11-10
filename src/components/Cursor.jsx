import { useEffect, useRef, useState } from 'react';

// Custom cursor (launchfolio.framer.website jaisa):
// chhota frosted dot jo mouse ke peeche smoothly chalta hai,
// aur [data-cursor] wale element par hover karne par label pill ban jaata hai.
// Usage: <div data-cursor="View Project">...</div>
export default function Cursor() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Sirf mouse/trackpad wale devices par, touch par nahi
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener('change', update);
    return () => fine.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    const text = el.firstChild;
    let label = '';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = { x: -100, y: -100 };
    const pos = { x: -100, y: -100 };
    let raf = 0;
    let visible = false;
    document.documentElement.classList.add('has-custom-cursor');

    const tick = () => {
      // Lerp: dot thoda delay ke saath follow karta hai
      const k = reduced ? 1 : 0.2;
      pos.x += (target.x - pos.x) * k;
      pos.y += (target.y - pos.y) * k;
      // `translate` property use karte hain, `transform` nahi: CSS `scale` (hover par 2.2)
      // transform ke translation ko bhi multiply kar deta tha aur dot door bhaag jaata tha
      el.style.translate = `calc(${pos.x}px - 50%) calc(${pos.y}px - 50%)`;
      raf = Math.abs(target.x - pos.x) + Math.abs(target.y - pos.y) > 0.1 ? requestAnimationFrame(tick) : 0;
    };

    // Pointer ke neeche wale element ke hisaab se label / link state set karo
    const sync = (node) => {
      const hit = node?.closest?.('[data-cursor]');
      // Label DOM mein seedha set karte hain (state se re-render hota aur classList reset ho jaati)
      const next = hit ? hit.getAttribute('data-cursor') : '';
      if (next !== label) {
        label = next;
        if (next) text.textContent = next;
        el.classList.toggle('has-label', !!next);
      }
      el.classList.toggle('is-link', !hit && !!node?.closest?.('a, button, [role="button"], input, textarea, label'));
    };

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        pos.x = target.x;
        pos.y = target.y;
        el.classList.add('is-visible');
      }
      sync(e.target);
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      visible = false;
      el.classList.remove('is-visible');
    };
    // Scroll par mouse nahi hilta, isliye pointer ke neeche element dobara check karo
    const onScroll = () => {
      if (visible) sync(document.elementFromPoint(target.x, target.y));
    };
    const onDown = () => el.classList.add('is-down');
    const onUp = () => el.classList.remove('is-down');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    window.addEventListener('pointerdown', onDown);
    window.addEventListener('pointerup', onUp);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('scroll', onScroll);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={ref} className="cursor-dot" aria-hidden="true">
      <span />
    </div>
  );
}
