// app/contact/page.tsx
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection/ContactSection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Jo Estetisk Glow i Oslo for spørsmål og timebestilling. Adresse, telefon, e-post og åpningstider.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt | Jo Estetisk Glow",
    description:
      "Adresse, telefon og åpningstider. Kontakt Jo Estetisk Glow for timebestilling.",
    url: "/contact",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Contact() {
  // Breadcrumbs JSON-LD (nekeičia dizaino, tik SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Hjem", "item": `${site.siteUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "Kontakt", "item": `${site.siteUrl}/contact` }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <ContactSection />
      </section>
    </>
  );
}
