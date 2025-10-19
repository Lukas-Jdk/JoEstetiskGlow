// app/page.tsx
import type { Metadata } from "next";
import Hero from "../components/Hero/Hero";
import TreatmentsCarousel from "@/components/TreatmentsCarousel/TreatmentsCarousel";
import ContactSection from "@/components/ContactSection/ContactSection";
import AboutMe from "@/components/About/AboutMe";
import { caruseleTreatments } from "@/data/caruseleTreatments";
import { site } from "@/data/site";

// Puslapio (Home) metaduomenys – perrašo globalius iš layout, jei reikia
export const metadata: Metadata = {
  title: "Hjem",
  description:
    "Naturlige resultater med estetiske behandlinger i Oslo. Profesjonell og trygg klinikk – bestill time hos Estetisk Glow.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hjem | Jo Estetisk Glow",
    description:
      "Naturlige resultater med estetiske behandlinger i Oslo. Bestill time hos Estetisk Glow.",
    url: "/",
    type: "website",
    // jei turi specifinį OG paveikslą Home’ui – nurodyk; kitu atveju paveldės iš layout
    images: site.assets?.ogImage ? [{ url: site.assets.ogImage, width: 1200, height: 630, alt: "Jo Estetisk Glow – Hjem" }] : undefined,
  },
};

export default function Page() {
  return (
    <>
      <Hero
        title="Jo Estetisk Glow"
        subtitle="Glow With Confidence"
        image="/hero3.png"
        imageAlt="Jo Estetisk Glow klinikk – estetiske behandlinger i Oslo"
       fullHeight={false}
        align="left"
        priority
        cta={{ label: "Bestill time", href: site.timmaUrl }}
      />
<AboutMe />
      <TreatmentsCarousel items={caruseleTreatments}  />
      <ContactSection />
    </>
  );
}
