import { SITE } from "../../lib/config";
import { EstimateForm, Faq, Pic } from "../../components/blocks";

export const metadata = {
  title: "Wood Fence Repair in Prosper, TX — Leaning & Broken Fences",
  description:
    "Wood fence repair in Prosper, TX: leaning sections reset, broken posts replaced, storm damage rebuilt. Cedar board-on-board specialists. Free estimates.",
  alternates: { canonical: "/wood-fence-repair/" },
};

const faqItems = [
  {
    q: "Wood post or steel post for the replacement?",
    a: "Steel posts cost more per hole but don't rot and resist clay movement far better — on windward runs and previously failed posts, they're what we recommend. Wood posts remain fine for sheltered runs. Most Prosper HOAs allow steel posts faced with cedar so the look doesn't change.",
  },
  {
    q: "How deep should fence posts be set here?",
    a: "For 8-foot board-on-board — the Prosper standard — we set posts at least a third of total height in a proper concrete footing, deeper than many original builder installs. Shallow builder footings are the single biggest reason young fences lean in this soil.",
  },
  {
    q: "Can you match my existing fence style and stain?",
    a: "Board-on-board with cap rail is the dominant style in Prosper and we match it as standard — picket size, cap profile, and stain tone. A repaired section will weather in to match the rest within a season.",
  },
  {
    q: "My neighbor and I share the fence. How does that work?",
    a: "Shared fences are usually a split cost by agreement between neighbors. We're happy to write the estimate in two halves and talk to both parties — it's the most common arrangement on Prosper property lines.",
  },
];

export default function WoodFenceRepair() {
  return (
    <>
      <section className="masthead">
        <div className="frame masthead-grid">
          <div>
            <h1>Wood Fence Repair in Prosper, TX</h1>
            <p>
              Reset the lean, replace the broken posts, rebuild the blown-down
              run — and set it so it doesn&rsquo;t happen again.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="masthead-phone">
              {SITE.phone}
            </a>
          </div>
          <EstimateForm heading="Estimate My Fence Repair" />
        </div>
      </section>

      <section className="plank">
        <div className="frame">
          <h2>Common Repairs We Run Every Week</h2>
          <ul>
            <li>Leaning sections braced, reset, and re-plumbed</li>
            <li>Broken, rotted, or heaved posts replaced — wood or steel</li>
            <li>Storm-downed panels rebuilt and rehung</li>
            <li>Cracked rails and cap boards replaced</li>
            <li>Missing or split pickets matched and installed</li>
            <li>Rot repair at the grade line, where cedar meets soil</li>
          </ul>
          <div className="pic-row">
            <Pic note="Real photo: BEFORE — leaning/collapsed fence run after a storm, Prosper backyard." />
            <Pic note="Real photo: AFTER — same run rebuilt, plumb and matched to neighbors. Same angle." />
          </div>
          <h2>Why the Lean Happens Here</h2>
          <p>
            Prosper&rsquo;s Blackland clay swells with fall rain and shrinks
            hard in July, and every cycle levers fence posts a little looser.
            Builder fences — installed fast, at the minimum spec, across
            thousands of homes at once in the big build-out years — are hitting
            their failure window now. That&rsquo;s why entire streets in the
            2014–2018 sections of town seem to lean together.
          </p>
          <p>
            A proper repair addresses the cause: footings sized for this soil,
            posts rated for the wind exposure of your particular run, and
            drainage considered where sprinklers keep the fence line
            permanently damp. Done right, the repaired section outlives the
            original build.
          </p>
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="rally">
        <div className="frame">
          <h2>Get It Fixed Before the Next Storm Finds It</h2>
          <p>A leaning fence is a down fence waiting for wind.</p>
          <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
        </div>
      </section>
    </>
  );
}
