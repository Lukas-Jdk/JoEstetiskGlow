// app/layout.tsx
import "../styles/globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import { Playfair_Display, Montserrat, Great_Vibes } from "next/font/google";
import type { Viewport, Metadata } from "next";
import { site } from "@/data/site";
import { info } from "@/data/info";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-greatvibes",
});

/** ✅ Viewport */
export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/** ✅ Globali metadata su absoliučiais URL (per metadataBase) */
const ogImage = site.assets.ogImage || "/og-home.png"; // fallback jei paliktum tuščią

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl), // -> visi santykiniai keliai taps absoliutūs
  title: {
    default: site.brand,
    template: `%s | ${site.brand}`,
  },
  description: site.defaultDescription,
  alternates: {
    canonical: site.siteUrl, // absoliutus canonical
  },
  robots: { index: true, follow: true },
  icons: { icon: site.assets.favicon || "/favicon.ico" },

  openGraph: {
    type: "website",
    locale: "nb_NO", // arba "no_NO" – abu ok
    url: site.siteUrl, // pilnas URL
    siteName: site.brand,
    title: site.brand,
    description: site.defaultDescription,
    images: [
      {
        url: ogImage, // '/og-home.png' -> pavirs į https://www.joestetiskglow.no/og-home.png
        width: 1200,
        height: 630,
        alt: `${site.brand} – forsiden`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description: site.defaultDescription,
    images: [ogImage], // ir čia taps absoliutus dėl metadataBase
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ LocalBusiness JSON-LD
  const hours = (info.hours || []).map((h) => {
    const [opens, closes] = (h.time || "").split("–");
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: (opens || "10:00").trim(),
      closes: (closes || "18:00").trim(),
    };
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: info.name || site.brand,
    url: site.siteUrl,
    image: site.assets.logo
      ? new URL(site.assets.logo, site.siteUrl).toString()
      : new URL("/og-home.png", site.siteUrl).toString(),
    telephone: info.phone,
    email: info.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: info.address,
      addressLocality: "Oslo",
      addressCountry: "NO",
    },
    openingHoursSpecification: hours,
    sameAs: [site.social?.instagram, site.social?.facebook].filter(Boolean),
  };

  return (
    <html lang="no">
      <body className={`${playfair.variable} ${montserrat.variable} ${greatVibes.variable}`}>
        <a href="#main-content" className="skip-link">Hopp til innhold</a>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="layout">
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}
