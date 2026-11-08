import { useState } from 'react';
import { faq } from '../data';
import Icon from './Icon';
import Reveal from './Reveal';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container faq-grid">
        <Reveal className="faq-left">
          <p className="kicker">FAQ</p>
          <h2 className="section-title">
            Things people <em>often ask.</em>
          </h2>
          <p className="muted-text">
            Quick answers to the questions recruiters and teams ask most. Can't find yours? Send a message.
          </p>
          <a href="#contact" className="btn btn-primary">Have another question?</a>
        </Reveal>

        <div className="faq-list">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <h3>
                  <button
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {item.q}
                    <span className="faq-toggle"><Icon name="plus" size={18} /></span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className="faq-answer">
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
