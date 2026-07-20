import Link from "next/link";
import { SITE, NAV_LINKS } from "../lib/config";

export function Header() {
  return (
    <header className="top">
      <div className="frame top-row">
        <Link href="/" className="wordmark">
          {SITE.name}
        </Link>
        <a href={`tel:${SITE.phoneTel}`} className="top-phone">
          ☎ {SITE.phone}
        </a>
      </div>
      <nav className="menubar" aria-label="Main">
        <ul className="frame">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bottom">
      <div className="frame">
        <p className="bottom-brand">{SITE.name}</p>
        <p>{SITE.legalLine}</p>
        <p>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> · {SITE.hours}
        </p>
        <ul className="bottom-nav">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <p className="bottom-fine">
          © {new Date().getFullYear()} {SITE.name} · Serving Prosper, TX —
          Whitley Place, Tanners Mill, Whispering Farms, Windsong Ranch, Star
          Trail, and every fence line in between.
        </p>
      </div>
    </footer>
  );
}

/** FAQ with mirrored FAQPage JSON-LD. */
export function Faq({ items, heading = "Fence Questions, Answered" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section className="qa">
      <div className="frame">
        <h2>{heading}</h2>
        {items.map((i) => (
          <div className="qa-item" key={i.q}>
            <h3>{i.q}</h3>
            <p>{i.a}</p>
          </div>
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  );
}

/** Loud placeholder for a real local photo. */
export function Pic({ note }) {
  return (
    <div className="pic-slot" role="img" aria-label={`Photo placeholder: ${note}`}>
      <strong>[ PHOTO PLACEHOLDER ]</strong>
      <span>{note}</span>
    </div>
  );
}

/** Estimate form — posts to SITE.formEndpoint (wire before launch). */
export function EstimateForm({ heading = "Free Repair Estimate" }) {
  return (
    <div className="est-card">
      <h2>{heading}</h2>
      <p className="est-sub">
        Describe the damage — photos help. We reply the same business day.
      </p>
      <form action={SITE.formEndpoint} method="POST">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
        <label>
          What's wrong with the fence?
          <select name="issue" defaultValue="Leaning or fallen sections">
            <option>Leaning or fallen sections</option>
            <option>Broken or rotted posts</option>
            <option>Sagging or dragging gate</option>
            <option>Staining / weatherproofing</option>
            <option>Storm damage</option>
            <option>Something else</option>
          </select>
        </label>
        <label>
          Neighborhood
          <input
            type="text"
            name="neighborhood"
            placeholder="e.g. Whitley Place, Tanners Mill"
          />
        </label>
        <button type="submit" className="cta-btn">
          Get My Estimate
        </button>
      </form>
    </div>
  );
}
