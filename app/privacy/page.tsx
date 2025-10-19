// app/privacy/page.tsx
import type { Metadata } from "next";
import styles from "@/styles/legal.module.css";
import { info } from "@/data/info";


export const metadata: Metadata = {
  title: "Personvernerklæring | Jo Estetisk Glow",
  description: "Informasjon om hvordan Jo Estetisk Glow behandler personopplysninger i henhold til GDPR.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className={styles.container}>
      <h1>Personvernerklæring</h1>
      <p>
        Denne personvernerklæringen beskriver hvordan {info.name} samler inn,
        bruker og beskytter personopplysninger i forbindelse med våre tjenester.
      </p>

      <h2>1. Hvilke data vi samler inn</h2>
      <p>
        Vi samler kun inn informasjon du selv oppgir via kontaktskjema eller e-post,
        som navn, telefonnummer og e-postadresse. Disse brukes kun til å besvare henvendelser.
      </p>

      <h2>2. Hvordan informasjon brukes</h2>
      <p>
        Opplysningene brukes kun for å ta kontakt og administrere timebestillinger.
        Ingen data deles med tredjeparter uten ditt samtykke.
      </p>

      <h2>3. Lagring og sletting</h2>
      <p>
        Opplysningene lagres så lenge det er nødvendig for å oppfylle formålet.
        Du kan når som helst be om innsyn eller sletting ved å kontakte oss på{" "}
        <a href={`mailto:${info.email}`}>{info.email}</a>.
      </p>

      <h2>4. Informasjonskapsler (cookies)</h2>
      <p>
        Nettsiden bruker kun nødvendige tekniske cookies (ingen sporing eller analyseverktøy).
      </p>

      <h2>5. Kontakt</h2>
      <p>
        Har du spørsmål om personvern? Kontakt oss på{" "}
        <a href={`mailto:${info.email}`}>{info.email}</a>.
      </p>
    </main>
  );
}
