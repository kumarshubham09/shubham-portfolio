import { skills } from '../data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

// Skill name se 2-letter monogram ("React.js" -> "Re", "Git & GitHub" -> "GG")
function mono(name) {
  const words = name.replace(/\(.*?\)/g, '').split(/[\s&/]+/).filter(Boolean);
  return words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : words[0].slice(0, 2);
}

export default function Skills() {
  const total = skills.reduce((n, g) => n + g.items.length, 0);
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          kicker="Skills & Tools"
          title="The toolkit"
          muted="behind the work."
          count={`${total} skills`}
          note="Day-to-day stack, with self-rated proficiency."
        />
        <div className="skill-rows">
          {skills.map((group, gi) => (
            <Reveal key={group.category} className="skill-row" delay={gi * 60}>
              <div className="skill-row-head">
                <h3>{group.category}</h3>
                <p>{String(gi + 1).padStart(2, '0')} · {group.items.length} skills</p>
              </div>
              <ul className="tool-grid">
                {group.items.map((s) => (
                  <li key={s.name} className="tool-card">
                    <span className="tool-mono" aria-hidden="true">{mono(s.name)}</span>
                    <span className="tool-name">{s.name}</span>
                    <span className="tool-level">
                      <span style={{ width: `${s.level}%` }} />
                      <span className="sr-only">{s.level}%</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
