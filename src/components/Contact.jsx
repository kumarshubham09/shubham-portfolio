import { useState } from 'react';
import { profile } from '../data';
import Icon from './Icon';
import Reveal from './Reveal';

const initial = { name: '', email: '', subject: '', message: '' };

// Web3Forms access key .env se aati hai (VITE_WEB3FORMS_KEY). Ye key public ho sakti hai,
// bas isse sirf aapke verified email par message jaata hai.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

function validate(v) {
  const errors = {};
  if (!v.name.trim()) errors.name = 'Name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) errors.email = 'Enter a valid email';
  if (v.message.trim().length < 10) errors.message = 'Message should be at least 10 characters';
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  // status: { type: 'idle' | 'sending' | 'success' | 'error', text }
  const [status, setStatus] = useState({ type: 'idle', text: '' });
  const [botcheck, setBotcheck] = useState(false);

  const onChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.type === 'sending') return;
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const subject = values.subject.trim() || `Portfolio contact from ${values.name}`;

    // Key set nahi hai to purana fallback: visitor ka email app khulta hai
    if (!WEB3FORMS_KEY) {
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
      setStatus({ type: 'success', text: 'Your email app should open now. Press Send there to deliver the message.' });
      return;
    }

    setStatus({ type: 'sending', text: 'Sending…' });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Portfolio] ${subject}`,
          from_name: 'Portfolio contact form',
          replyto: values.email,
          name: values.name,
          email: values.email,
          message: values.message,
          botcheck,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) throw new Error(data.message || `Request failed (${res.status})`);

      setStatus({ type: 'success', text: "Thanks! Your message has been sent. I'll get back to you soon." });
      setValues(initial);
    } catch {
      setStatus({
        type: 'error',
        text: `Sorry, the message couldn't be sent. Please try again or email me at ${profile.email}.`,
      });
    }
  };

  const sending = status.type === 'sending';

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <Reveal className="contact-left">
          <p className="kicker">Get in touch</p>
          <h2 className="section-title">
            Let's build <em>something together.</em>
          </h2>
          <p className="muted-text">
            Open to frontend roles and interesting projects. If you're working on something that needs fast,
            careful UI, I'd love to hear about it.
          </p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Icon name="mail" />
            {profile.email}
          </a>
          <dl className="contact-facts">
            <div>
              <dt>Availability</dt>
              <dd><span className="dot-green" aria-hidden="true" /> {profile.status}</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a></dd>
            </div>
            <div>
              <dt>Response</dt>
              <dd>{profile.responseTime}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="contact-right" delay={120}>
          <form className="glass-card contact-form" onSubmit={onSubmit} noValidate>
            <p className="form-intro">Send a quick note. I'll reply soon.</p>
            <div className="form-row">
              <Field label="Name" name="name" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
              <Field label="Email" name="email" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
            </div>
            <Field label="Subject" name="subject" value={values.subject} onChange={onChange} />
            <Field label="Message" name="message" textarea value={values.message} onChange={onChange} error={errors.message} />
            {/* Honeypot: insaan ko nahi dikhta, bots tick kar dete hain to Web3Forms unhe reject karta hai */}
            <input
              type="checkbox"
              name="botcheck"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              checked={botcheck}
              onChange={(e) => setBotcheck(e.target.checked)}
            />
            <button type="submit" className="btn btn-primary btn-block" disabled={sending} aria-busy={sending}>
              {sending ? 'Sending…' : 'Send message'}
            </button>
            <p className={`form-status ${status.type}`} role="status" aria-live="polite">
              {status.type !== 'sending' && status.text}
            </p>
          </form>

          <div className="glass-card reach-card">
            <p className="field-label">Or reach me directly</p>
            <ul className="pill-list">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <Icon name={s.icon} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, error, textarea, ...props }) {
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <div className="field">
      <label htmlFor={name} className="field-label">{label}</label>
      <Tag
        id={name}
        name={name}
        rows={textarea ? 4 : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      {error && <span className="error" id={`${name}-error`}>{error}</span>}
    </div>
  );
}
