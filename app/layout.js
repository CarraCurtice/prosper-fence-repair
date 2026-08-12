import "./globals.css";
import { Header, Footer } from "../components/blocks";
import { SITE } from "../lib/config";

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Fence Repair in Prosper, TX`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Wood fence repair, gate repair, and fence staining in Prosper, TX. Leaning posts, storm damage, sagging gates — fixed fast by a local crew.",
  openGraph: { siteName: SITE.name, locale: "en_US", type: "website" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  description: "Residential fence repair and staining service for Prosper, Texas.",
  url: SITE.domain,
  telephone: SITE.phoneTel,
  areaServed: {
    "@type": "City",
    name: "Prosper",
    containedInPlace: { "@type": "State", name: "Texas" },
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHours: "Mo-Sa 08:00-18:00",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
