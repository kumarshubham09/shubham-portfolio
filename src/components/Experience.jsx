import { experience } from '../data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';
import Icon from './Icon';

// Period "March 2025 – Present" ko year range mein badalta hai
function years(period) {
  const [from, to] = period.split('–').map((p) => p.trim());
  const y = (s) => s.match(/\d{4}/)?.[0] ?? s;
  return { from: y(from), to: to === 'Present' ? 'Present' : y(to) };
}

export function TimelineCard({ item, delay }) {
  const { from, to } = years(item.period);
  const current = to === 'Present';
  // Summary dobara na dikhe; education ke "Degree:/Institution:" lines card mein pehle se hain
  const highlights = (item.points ?? [])
    .filter((p) => p !== item.summary && !/^(Degree|Institution|Academic Record):/.test(p))
    .slice(0, 3);
  return (
    <Reveal delay={delay}>
      <article className="row-card">
        <p className="row-year">
          {from} —{' '}
          {current ? (
            <span className="row-present">
              <span className="dot-green" aria-hidden="true" /> Present
            </span>
          ) : (
            to
          )}
        </p>
        <div className="row-position">
          <h3>{item.title}</h3>
          <em>at {item.org}</em>
        </div>
        <div className="row-info">
          <p>{item.summary}</p>
          {highlights.length > 0 && (
            <ul className="row-points">
              {highlights.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          )}
          <ul className="tag-list">
            <li>{item.location}</li>
            {item.grade && <li>{item.grade}</li>}
            <li>{item.type === 'work' ? 'Full-time' : 'Degree'}</li>
          </ul>
        </div>
      </article>
    </Reveal>
  );
}

// Education card: reoporto.framer.website ke Services card jaisa
// (orange number + icon box, title, description, divider, check list)
function EducationCard({ item, index, delay }) {
  const { from, to } = years(item.period);
  const focus = (item.points ?? []).find((p) => /^(Key focus|Core foundations):/.test(p));
  const subjects = focus ? focus.replace(/^[^:]+:\s*/, '').replace(/\.$/, '').split(/,\s*/) : [];
  return (
    <Reveal delay={delay} className="edu-card">
      <div className="edu-top">
        <span className="edu-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="edu-icon" aria-hidden="true">
          <Icon name="cap" size={18} />
        </span>
      </div>
      <div>
        <h3>{item.title}</h3>
        <p className="edu-org">
          {item.org}, {item.location}
        </p>
      </div>
      <p className="edu-meta">
        {from} – {to} · {item.grade}
      </p>
      <hr className="edu-rule" />
      <ul className="edu-list">
        {subjects.map((s) => (
          <li key={s}>
            <Icon name="check" size={14} />
            {s}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

// children (Projects) Experience aur Education ke beech render hota hai
export default function Experience({ children }) {
  const work = experience.filter((e) => e.type === 'work');
  const edu = experience.filter((e) => e.type === 'education');

  return (
    <>
      <section id="experience" className="section">
        <div className="container">
          <SectionTitle
            kicker="Experience"
            title="Building interfaces"
            muted="people use"
            rest="every day."
            count={`${work.length} roles`}
            note="Intern to Junior Frontend Developer in six months at ProX Infotech."
          />
          <div className="stack">
            {work.map((item, i) => (
              <TimelineCard key={item.title} item={item} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {children}

      <section id="education" className="section">
        <div className="container">
          <SectionTitle
            kicker="Education"
            title="Foundations in"
            muted="computer"
            rest="applications."
            count={`${edu.length} degrees`}
            note="MCA and BCA, with a focus on web architecture, OOP and DSA."
          />
          <div className="edu-grid">
            {edu.map((item, i) => (
              <EducationCard key={item.title} item={item} index={i} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
