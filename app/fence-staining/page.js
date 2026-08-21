import { SITE } from "../../lib/config";
import { EstimateForm, Faq } from "../../components/blocks";

export const metadata = {
  title: "Fence Staining in Prosper, TX: Clean, Brighten & Seal",
  description:
    "Fence staining in Prosper, TX: wash, brighten, and seal cedar fences in HOA-approved tones. Protects against sun, sprinklers, and clay-line rot.",
  alternates: { canonical: "/fence-staining/" },
};

const faqItems = [
  {
    q: "When should a new cedar fence be stained?",
    a: "Once the mill glaze and moisture are gone, typically 4–8 weeks after install for a summer build, longer in winter. Wait too long and UV damage starts; Prosper sun grays exposed cedar noticeably within a single summer.",
  },
  {
    q: "Does my HOA control the stain color?",
    a: "In most Prosper communities, yes. HOAs commonly specify an approved tone range for fence stain. Check your community's guidelines or bring us the doc; we work in approved tones and can confirm before a drop of stain goes on.",
  },
  {
    q: "How long does stain last here?",
    a: "A quality oil-based semi-transparent runs 3–5 years on vertical boards in this climate. Sprinkler-side faces and full-sun western runs wear first. We'll tell you at the estimate which sides of your fence are aging fastest.",
  },
  {
    q: "Can you stain over an old, gray fence?",
    a: "Yes, after a proper clean and brighten. Stain over gray oxidation looks muddy and peels early, so prep is most of the job. The transformation from gray to sealed cedar is dramatic; it reads like a new fence at a fraction of the cost.",
  },
];

export default function FenceStaining() {
  return (
    <>
      <section className="masthead">
        <div className="frame masthead-grid">
          <div>
            <h1>Fence Staining in Prosper, TX</h1>
            <p>
              Clean, brighten, seal. The cheapest way to double the life of a
              cedar fence, and keep the HOA happy while you&rsquo;re at it.
            </p>
            <a href={`tel:${SITE.phoneTel}`} className="masthead-phone">
              {SITE.phone}
            </a>
          </div>
          <EstimateForm heading="Estimate My Staining Job" />
        </div>
      </section>

      <section className="plank">
        <div className="frame">
          <h2>Our Staining Process</h2>
          <ol>
            <li>Wash the fence at wood-safe pressure and treat organic growth</li>
            <li>Brighten to neutralize graying and open the grain</li>
            <li>Let it dry to proper moisture content</li>
            <li>Apply penetrating stain, sprayed and back-brushed</li>
            <li>Detail cap rails, posts, and gate hardware lines</li>
          </ol>
          <h2>Why Stain Matters More in Prosper</h2>
          <p>
            An unstained cedar fence here fights UV that grays it in a year or
            two, sprinklers that soak the bottom rail nightly, and clay soil
            that wicks moisture into the post line. Sealed wood sheds all
            three. The math is simple: staining every few years costs a
            fraction of the section repairs and early replacement an
            unprotected fence needs, which is exactly why our{" "}
            <a href="/wood-fence-repair/">repair crew</a> can tell which
            fences were stained from a block away.
          </p>
          <p>
            We also coordinate repairs and staining as one project: fix the
            failed posts and pickets first, then seal the whole line so it all
            weathers evenly.
          </p>
        </div>
      </section>

      <Faq items={faqItems} />

      <section className="rally">
        <div className="frame">
          <h2>Gray Fence, Good Bones?</h2>
          <p>Clean, brighten, and seal it this month. Enjoy it for years.</p>
          <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phone}</a>
        </div>
      </section>
    </>
  );
}
