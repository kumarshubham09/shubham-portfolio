import { achievements } from '../data';
import Reveal from './Reveal';
import SectionTitle from './SectionTitle';

// Reference ka "Reviews" section, yahan achievements ke saath
export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionTitle
          kicker="Achievements"
          title="Proof in"
          muted="the numbers."
          count={`${achievements.length} highlights`}
          note="Competitive programming and measurable production impact."
        />
        <div className="quote-grid">
          {achievements.map((a, i) => (
            <Reveal key={a.platform} delay={i * 80}>
              <article className="quote-card">
                <p className="quote-text">{a.description}</p>
                <div className="quote-foot">
                  <span className="quote-metric">{a.metric}</span>
                  <div>
                    <strong>
                      {a.url ? (
                        <a href={a.url} target="_blank" rel="noopener noreferrer">{a.platform}</a>
                      ) : (
                        a.platform
                      )}
                    </strong>
                    <span>{a.metricLabel}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
