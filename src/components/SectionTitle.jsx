import Reveal from './Reveal';

// Reference design ka heading block: purple kicker, serif title (ek hissa muted),
// aur right side mein chhota count + description
export default function SectionTitle({ kicker, title, muted, rest, count, note }) {
  return (
    <Reveal className="section-head">
      <div>
        <p className="kicker">{kicker}</p>
        <h2 className="section-title">
          {title} {muted && <em>{muted}</em>} {rest}
        </h2>
      </div>
      {(count || note) && (
        <div className="section-aside">
          {count && <em>{count}</em>}
          {note && <p>{note}</p>}
        </div>
      )}
    </Reveal>
  );
}
