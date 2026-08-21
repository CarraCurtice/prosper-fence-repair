import Link from "next/link";
import { SITE } from "../lib/config";
import { EstimateForm, Faq } from "../components/blocks";

export const metadata = {
  title: "Fence Repair in Prosper, TX: Leaning Posts, Storm Damage, Gates",
  description:
    "Local fence repair in Prosper, TX. Leaning fences, broken posts, storm damage, sagging gates, and staining, fixed by a crew that works Prosper every day.",
  alternates: { canonical: "/" },
};

const faqItems = [
  {
    q: "Why is my fence leaning when it's only a few years old?",
    a: "Prosper sits on expansive Blackland Prairie clay. It swells when wet and shrinks hard in summer drought, and that movement works posts loose, especially wood posts set in shallow or undersized concrete. Add a south wind across an open field and a young fence can lean in year three.",
  },
  {
    q: "Can you fix just the damaged section, or do I need a whole new fence?",
    a: "Usually just the section. If the rails and pickets are sound, we reset or replace the failed posts and rehang what's there. We'll tell you honestly when a fence is past the point where section repairs make financial sense, but most aren't.",
  },
  {
    q: "A storm knocked panels down. How fast can you come?",
    a: "Storm calls jump the queue, especially for fences shared with a neighbor or containing dogs and pools. After a big blow we run extended hours; call early because the whole town calls the same morning.",
  },
  {
    q: "Do you handle HOA requirements?",
    a: "Yes. Most Prosper HOAs require board-on-board style, cap rails, and approved stain colors. We repair to match your community's standard so the fix doesn't earn you a violation letter.",
  },
];

export default function Home() {
  return (
    <>
      <section className="masthead">
        <div className="frame masthead-grid">
          <div>
            <h1>Fence Repair in Prosper, TX</h1>
            <p>
              Leaning sections, snapped posts, storm damage, gates that drag,
              repaired by a local crew that knows what Prosper clay and Texas
              wind do to a fence.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="masthead-phone">
              {SITE.phone}
            </a>
            <ul className="badges">
              <li>Local Prosper crew</li>
              <li>Free estimates</li>
              <li>Section repairs, not whole-fence upsells</li>
              <li>HOA-standard workmanship</li>
            </ul>
          </div>
          <EstimateForm />
        </div>
      </section>

      <section className="plank">
        <div className="frame">
          <h2>What We Fix</h2>
          <div className="svc-row">
            <img
              src="/images/fence-post-concrete.jpg"
              alt="New wood fence post being set in fresh concrete"
              className="svc-photo"
              width="960"
              height="720"
              loading="lazy"
            />
            <div>
              <h3>
                <Link href="/wood-fence-repair/">Wood Fence Repair</Link>
              </h3>
              <p>
                Leaning and fallen sections, broken or rotted posts, cracked
                rails, missing pickets, and storm damage. We reset posts in
                proper concrete footings sized for our clay, or upgrade you to
                steel posts so the lean never comes back.
              </p>
            </div>
          </div>
          <div className="svc-row">
            <img
              src="/images/hammering-fence-boards.jpg"
              alt="Nailing cedar fence boards to the rail"
              className="svc-photo"
              width="960"
              height="720"
              loading="lazy"
            />
            <div>
              <h3>
                <Link href="/gate-repair/">Gate Repair</Link>
              </h3>
              <p>
                Sagging, dragging, gap-at-the-latch gates. New hinges, anti-sag
                hardware, rebuilt frames, latch alignment, and self-closing
                hardware for pool-safety gates.
              </p>
            </div>
          </div>
          <div className="svc-row">
            <img
              src="/images/stained-cedar-fence.jpg"
              alt="Freshly stained cedar fence in a rich warm tone"
              className="svc-photo"
              width="960"
              height="720"
              loading="lazy"
            />
            <div>
              <h3>
                <Link href="/fence-staining/">Fence Staining</Link>
              </h3>
              <p>
                Clean, brighten, and seal. Stain is the difference between a
                cedar fence lasting 12 years and lasting 25, and in most
                Prosper neighborhoods it&rsquo;s also what the HOA expects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="frame pair">
          <div>
            <h2>Why Fences Fail Faster in Prosper</h2>
            <p>
              Three local forces beat on every fence in town. The clay soil
              moves with every wet-dry cycle and levers posts out of plumb.
              Spring storm season brings straight-line winds with nothing to
              slow them down west of town. The fences backing onto open land
              in Windsong Ranch and out toward Artesia take it hardest. And the
              sun cooks unstained cedar gray and brittle within a couple of
              summers.
            </p>
            <p>
              None of that is a construction defect. It&rsquo;s just Prosper.
              The fix is repair work matched to the cause: deeper footings,
              steel posts where wind exposure justifies them, and stain before
              the sun does permanent damage.
            </p>
            <p>
              <Link href="/service-areas/">
                See the neighborhoods we work in →
              </Link>
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

      <Faq items={faqItems} />

      <section className="rally">
        <div className="frame">
          <h2>Fence Down? Gate Dragging?</h2>
          <p>Call now. Storm repairs and pool-gate fixes go to the front of the line.</p>
          <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
        </div>
      </section>
    </>
  );
}
