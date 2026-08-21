import { SITE } from "../../lib/config";
import { EstimateForm, Faq } from "../../components/blocks";

export const metadata = {
  title: "Gate Repair in Prosper, TX: Sagging & Dragging Gates Fixed",
  description:
    "Gate repair in Prosper, TX: sagging gates, dragging bottoms, broken latches, rebuilt frames, and self-closing pool-gate hardware. Same-week service.",
  alternates: { canonical: "/gate-repair/" },
};

const faqItems = [
  {
    q: "Why do wooden gates always sag?",
    a: "Physics. A gate is a lever hanging off two hinges, and cedar gets heavier when wet. Without a proper diagonal brace or steel frame, gravity wins. The fix is usually an anti-sag kit or a welded steel gate frame, not just tightening screws that will loosen again.",
  },
  {
    q: "My gate won't latch anymore. What changed?",
    a: "Either the gate dropped, or the fence posts moved. In Prosper's clay, often both. Seasonal soil movement shifts the latch relationship a little every year. We re-align, and where the movement is chronic we install adjustable latches that absorb it.",
  },
  {
    q: "Do you install self-closing hinges for pool gates?",
    a: "Yes: self-closing, self-latching hardware on any gate that opens to a pool. If you have a pool, this is the gate repair worth doing this week, not someday: Texas pool code expects it and so does common sense with kids in the neighborhood.",
  },
  {
    q: "Is it worth repairing, or should I just get a new gate?",
    a: "If the pickets are decent, a rebuild on a steel frame reuses your existing wood and costs well under a full custom replacement, and the frame never sags. We quote both ways when it's a close call.",
  },
];

export default function GateRepair() {
  return (
    <>
      <section className="masthead">
        <div className="frame masthead-grid">
          <div>
            <h1>Gate Repair in Prosper, TX</h1>
            <p>
              The gate is the moving part, so it fails first. Sag, drag, and
              won&rsquo;t-latch, fixed properly instead of re-tightened for the
              third time.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="masthead-phone">
              {SITE.phone}
            </a>
          </div>
          <EstimateForm heading="Estimate My Gate Repair" />
        </div>
      </section>

      <section className="plank">
        <div className="frame">
          <h2>Gate Work We Do</h2>
          <ul>
            <li>Anti-sag cable kits and diagonal bracing</li>
            <li>Rebuilds on welded steel gate frames (your cedar, our frame)</li>
            <li>Hinge replacement and hinge-post repair</li>
            <li>Latch alignment and adjustable latch upgrades</li>
            <li>Self-closing, self-latching hardware for pool gates</li>
            <li>Double drive gates for backyard and side-yard access</li>
          </ul>
          <h2>The Prosper Gate Reality</h2>
          <p>
            Nearly every backyard in town runs a cedar gate on a wood frame,
            and nearly every one sags by year five, faster on the west side
            where afternoon sun cycles the wood daily. The clay under the
            hinge post moves too, which is why your gate latched fine in
            March and scrapes in August. Homes with pools have the extra
            stakes: a gate that doesn&rsquo;t self-close and latch is a real
            safety problem, and one we treat as a priority call.
          </p>
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="rally">
        <div className="frame">
          <h2>Lifting the Gate to Latch It?</h2>
          <p>That trick has about a month left in it. Call before it quits entirely.</p>
          <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
        </div>
      </section>
    </>
  );
}
