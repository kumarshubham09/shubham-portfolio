import { services } from '../data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionTitle kicker="What I offer" title="Services" />
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="card service">
              <div className="service-icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
