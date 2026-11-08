import { useState } from 'react';
import { profile } from '../data';
import { useActiveSection } from '../hooks';
import Icon from './Icon';

const links = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'experience', label: 'Experience', icon: 'briefcase' },
  { id: 'projects', label: 'Work', icon: 'grid' },
  { id: 'skills', label: 'Skills', icon: 'layers' },
  { id: 'achievements', label: 'Wins', icon: 'star' },
  { id: 'faq', label: 'FAQ', icon: 'help' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
];
const ids = links.map((l) => l.id);

export default function Navbar({ theme, toggleTheme }) {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <header className="navbar">
      <nav className="nav-pill" aria-label="Main navigation">
        <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
          {first} <em>{rest.join(' ')}</em>
        </a>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                aria-current={active === l.id ? 'page' : undefined}
                onClick={() => setOpen(false)}
              >
                <Icon name={l.icon} size={17} />
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a
            href={profile.resumeUrl}
            className="btn btn-primary nav-cv"
            download="Shubham_Kumar_Resume_Frontend_Developer.pdf"
          >
            Download CV
          </a>
          <button
            className="icon-btn hamburger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>
    </header>
  );
}
