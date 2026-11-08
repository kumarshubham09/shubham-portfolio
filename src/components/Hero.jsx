import { profile } from '../data';
import { useTypewriter } from '../hooks';
import Icon from './Icon';

export default function Hero() {
  const typed = useTypewriter(profile.roles.slice(1));
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="kicker">Portfolio &amp; Résumé</p>
          <h1 className="hero-name">
            {first}
            <em>{rest.join(' ')}</em>
          </h1>

          <div className="role-pill">
            <span className="pulse-dot" aria-hidden="true" />
            <strong>{profile.roles[0]}</strong>
            <span className="role-typed" aria-label={profile.roles.slice(1).join(', ')}>
              <span aria-hidden="true">{typed}</span>
              <span className="cursor" aria-hidden="true">|</span>
            </span>
          </div>

          <p className="hero-lead">
            I build <b>clean, semantic interfaces</b> with React.js, Next.js and TypeScript, focused on{' '}
            <b>performance</b>, accessibility and pixel-perfect delivery from Figma to production.
          </p>

          <ul className="pill-list">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  <Icon name={s.icon} size={18} />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <svg className="hero-pattern" viewBox="0 0 400 400" aria-hidden="true">
            {[60, 100, 140, 180].map((r) => (
              <circle key={r} cx="200" cy="200" r={r} />
            ))}
          </svg>
          <div className="photo-card">
            <img src={profile.avatar} alt={profile.name} />
            <span className="status-chip">
              <span className="dot-green" aria-hidden="true" />
              {profile.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
