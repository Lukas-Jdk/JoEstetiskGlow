// app/about/page.tsx
import styles from "./page.module.css";
import AboutMe from "@/components/About/AboutMe";

export const metadata = {
  title: "Om oss",
  description:
    "Estetisk Glow – naturlige, trygge estetiske behandlinger i Oslo. Les om vår filosofi, trygghet og tilnærming.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <main className={styles.page}>
      

      <AboutMe/>

        {/* Behandlingsfilosofi */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Behandlingsfilosofi</h2>
          <div className={styles.textBlock}>
            <p>
              Estetiske injeksjoner er som et ømt penselstrøk på livets lerret. En subtil dans
              mellom vitenskap og skjønnhet – en stille symfoni av fornyelse som glatter disse
              dråpene ut over tidens merke.
            </p>
            <p>
              Hver injeksjon er en nøye balansert harmoni der kroppens eget stoff får en ny tone, en
              frisk glød, og åpner opp for skjønnhetens ekte uttrykk.
            </p>
            <p>
              Det er stille kunst, et poetisk øyeblikk av kjærlighet, der det ytre møter det indre.
            </p>
          </div>
        </section>

        {/* Viktig å vite */}
        <section className={styles.section}>
          <h2 className={styles.h2}>Viktig å vite</h2>
          <p className={styles.text}>
            Det er avgjørende at estetiske injeksjoner utføres av kvalifiserte og erfarne
            fagpersoner for å sikre trygghet og best mulig resultat.
          </p>
        </section>

      
      </main>
    </>
  );
}
