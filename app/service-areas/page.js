import { SITE } from "../../lib/config";
import { Faq } from "../../components/blocks";

export const metadata = {
  title: "Prosper, TX Fence Repair Service Area",
  description:
    "Fence repair across Prosper, TX: Whitley Place, Tanners Mill, Whispering Farms, Windsong Ranch, Star Trail, Legacy Gardens, Lakes of La Cima, and downtown Prosper.",
  alternates: { canonical: "/service-areas/" },
};

const areas = [
  {
    name: "Whitley Place",
    note: "Built 2008–2017, which makes its original cedar fences some of the oldest in town — prime years for post failure and full-section repairs. The wooded Wilson Creek lots also mean falling-limb damage after storms.",
  },
  {
    name: "Tanners Mill",
    note: "Bigger lots, longer fence runs, more gates. Repair jobs here often bundle several issues discovered on the walk-around — we quote the whole line so there are no surprises.",
  },
  {
    name: "Whispering Farms",
    note: "Acreage-style properties with long perimeter runs and drive gates. Wind exposure across open ground is the main enemy; steel-post upgrades earn their keep here.",
  },
  {
    name: "Windsong Ranch",
    note: "West Prosper's big master-planned community. Fences on the outer phases back onto open land and catch the full south wind — the classic Prosper lean shows up early on those runs.",
  },
  {
    name: "Star Trail",
    note: "Newer fences, high HOA standards. Work here is matching-grade: repairs that blend invisibly with board-on-board and cap-rail specs, in approved stain tones.",
  },
  {
    name: "Legacy Gardens & Lakes of La Cima",
    note: "A mix of newer builds and established streets. La Cima's older sections are entering the same repair window as Whitley Place; Legacy Gardens is mostly gate and warranty-age tune-up work.",
  },
  {
    name: "Downtown Prosper",
    note: "The established blocks off Broadway have the most varied fencing in town — older pickets, chain link conversions, custom runs. Every job starts with a look, not an assumption.",
  },
];

const faqItems = [
  {
    q: "Do you cover every neighborhood in Prosper?",
    a: "Yes — town limits and the edges, both counties. The list above is where the trucks are most weeks, not a boundary.",
  },
  {
    q: "What about addresses just outside Prosper?",
    a: "Fence lines don't respect city limits — if you're on the Celina or Frisco edge of town, call. If the schedule allows, we'll take it.",
  },
];

export default function ServiceAreas() {
  return (
    <>
      <section className="masthead">
        <div className="frame">
          <h1>Fence Repair Across Prosper, TX</h1>
          <p>
            Same clay, same wind, different fences. Here&rsquo;s what we
            actually see neighborhood by neighborhood.
          </p>
          <a href={`tel:${SITE.phoneTel}`} className="masthead-phone">
            {SITE.phone}
          </a>
        </div>
      </section>

      <section>
        <div className="frame">
          <ul className="area-list">
            {areas.map((a) => (
              <li key={a.name}>
                <h3>{a.name}</h3>
                <p>{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="plank">
        <div className="frame pair">
          <div>
            <h2>Why the Neighborhood Matters</h2>
            <p>
              Fence repair is diagnosis first, and the diagnosis often starts
              with the address. Build year tells us the likely footing spec.
              Position in town tells us the wind exposure. The HOA tells us
              the style and stain rules. By the time we knock on your door,
              we usually know what we&rsquo;re going to find — which is why
              estimates are fast and firm.
            </p>
          </div>
          <iframe
            src={SITE.mapEmbedSrc}
            className="map-pane"
            title="Map of Prosper, TX"
            loading="lazy"
          />
        </div>
      </section>

      <Faq items={faqItems} heading="Coverage Questions" />
    </>
  );
}
