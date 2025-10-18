// app/terms/page.tsx
import type { Metadata } from "next";
import styles from "@/styles/legal.module.css";
import { info } from "@/data/info";

export const metadata: Metadata = {
  title: "Vilkår for bruk | Estetisk Glow",
  description: "Bruksvilkår og ansvarsbegrensning for Estetisk Glow sin nettside.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className={styles.container}>
      <h1>Vilkår for bruk</h1>

      <h2>1. Generelt</h2>
      <p>
        Ved å bruke denne nettsiden godtar du disse vilkårene. Nettsiden tilhører {info.name}.
      </p>

      <h2>2. Informasjon og medisinsk ansvarsfraskrivelse</h2>
      <p>
        Innholdet på denne nettsiden er kun ment som generell informasjon om estetiske behandlinger.
        Det erstatter ikke medisinsk vurdering eller konsultasjon. Rådfør deg alltid med kvalifisert
        helsepersonell før du gjennomfører behandling.
      </p>

      <h2>3. Bilder og innhold</h2>
      <p>
        Bildene på denne nettsiden er illustrative og ikke nødvendigvis av faktiske kunder.
        Innholdet kan være generert eller redigert for estetiske formål.
      </p>

      <h2>4. Ansvarsbegrensning</h2>
      <p>
        Vi tar ikke ansvar for eventuelle feil, unøyaktigheter eller konsekvenser av bruk av informasjon
        som finnes på nettsiden. Bruk skjer på eget ansvar.
      </p>

      <h2>5. Immaterielle rettigheter</h2>
      <p>
        Alt innhold på denne nettsiden er beskyttet av opphavsrett. Uautorisert bruk, kopiering eller
        distribusjon er ikke tillatt.
      </p>

      <h2>6. Endringer</h2>
      <p>
        Vi forbeholder oss retten til å endre eller oppdatere disse vilkårene uten varsel.
      </p>
    </main>
  );
}
