import { projects } from '../data';
import Icon from './Icon';
import ProjectGallery from './ProjectGallery';
import SectionTitle from './SectionTitle';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          kicker="Projects"
          title="Selected work,"
          muted="end-to-end"
          rest="from spec to ship."
          count={`${projects.length} projects`}
          note="Production websites and internal tools built at ProX Infotech."
        />

        {/* Card grid: upar inset media panel, neeche title + description */}
        <div className="project-grid">
          {projects.map((p, i) => {
            const [name] = p.title.split(/ – | - /);
            const link = p.isLiveUrl ? p.live : p.code;
            const hasImages = p.images?.length > 0;
            const label = `${String(i + 1).padStart(2, '0')} · ${p.category}`;
            return (
              <article key={p.title} className="project-card">
                <div className={`project-media${hasImages ? ' has-image' : ''}`} style={{ '--c': p.color }}>
                  {hasImages ? (
                    <ProjectGallery images={p.images} name={name} label={label} />
                  ) : (
                    <>
                      <ul className="media-tags" aria-hidden="true">
                        {p.tags.slice(0, 4).map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                      <span className="media-label">{label}</span>
                    </>
                  )}
                </div>

                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p className="project-sub">{p.subtitle}</p>
                  <p>{p.description}</p>
                </div>

                <div className="project-foot">
                  <ul className="project-meta">
                    <li>{p.period}</li>
                    {p.tags.slice(0, 2).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a
                    className="project-arrow"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.isLiveUrl ? 'Visit' : 'View code for'} ${p.title}`}
                  >
                    <Icon name="arrow" size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
