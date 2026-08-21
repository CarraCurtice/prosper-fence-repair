import { SITE } from "../../lib/config";
import { EstimateForm, Faq } from "../../components/blocks";

export const metadata = {
  title: "Contact Prosper Fence Repair: Free Estimates",
  description:
    "Get a free fence repair estimate in Prosper, TX. Call or send the form with photos of the damage. We reply the same business day.",
  alternates: { canonical: "/contact/" },
};

const faqItems = [
  {
    q: "What makes an estimate go faster?",
    a: "Photos. One wide shot of the whole affected run, one close-up of the worst spot, and your neighborhood. With those, most repairs get a number the same day.",
  },
  {
    q: "Do you charge to come look?",
    a: "No. Estimates are free, whether we price from photos or come walk the fence line.",
  },
  {
    q: "How soon can the work happen?",
    a: "Typical repairs land within the week. Storm damage and pool-gate safety issues get priority scheduling.",
  },
];

export default function Contact() {
  return (
    <>
      <section className="masthead">
        <div className="frame masthead-grid">
          <div>
            <h1>Contact Prosper Fence Repair</h1>
            <p>
              <a href={`tel:${SITE.phoneTel}`} className="masthead-phone">
                {SITE.phone}
              </a>
            </p>
            <p>{SITE.hours}</p>
            <p>
              Service area: all of Prosper, TX, including Whitley Place, Tanners Mill,
              Whispering Farms, Windsong Ranch, Star Trail, Legacy Gardens,
              Lakes of La Cima, and downtown.
            </p>
          </div>
          <EstimateForm />
        </div>
      </section>

      <section>
        <div className="frame pair">
          <div>
            <h2>Where We Work</h2>
            <iframe
              src={SITE.mapEmbedSrc}
              className="map-pane"
              title="Map of Prosper, TX service area"
              loading="lazy"
            />
          </div>
          <div>
            <h2>Texting Photos?</h2>
            <p>
              Call first so we have your number, then text the damage photos to
              the same line. Wide shot plus close-up beats ten blurry ones.
            </p>
          </div>
        </div>
      </section>

      <Faq items={faqItems} heading="Estimate Questions" />
    </>
  );
}
