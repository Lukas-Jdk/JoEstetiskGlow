import Image from "next/image";
import { CheckCircle, Clock, Sparkles, Heart, MessageSquare, Star } from "lucide-react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <section className={styles.aboutSection} id="om-oss">
      {/* Viršutinė antraštė */}
      <header className={styles.header}>
        <h1 className={styles.heading}>Om Oss</h1>
        <p className={styles.subheading}>
          Naturlige resultater – med omtanke og presisjon
        </p>
      </header>

      {/* Dviejų kolonų turinys */}
      <div className={styles.grid}>
        {/* Kairėje – nuotrauka */}
        <div className={styles.imageBox}>
          <Image
            src="/omoss1.webp"
            alt="Estetisk Glow – estetiske behandlinger i Oslo"
            width={600}
            height={750}
            className={styles.image}
            priority
          />
        </div>

        {/* Dešinėje – aprašymas ir sąrašas */}
        <div className={styles.contentBox}>
          {/* Balta kortelė su tekstu */}
          <div className={styles.textCard}>
            <h2 className={styles.sectionTitle}>Om meg</h2>
            <p className={styles.paragraph}>
              Jeg er en person som veldig gjerne ser verden i et fantastisk, pent bilde. Jeg kan hjelpe
              deg med å få et ungdommelig og friskt utseende, samtidig som du bevarer et naturlig
              uttrykk. Både kvinner og menn som ønsker å forbedre sitt utseende uten kirurgi er
              velkomne.
            </p>
          </div>

          {/* Kortelė su ikonėlėmis */}
          <div className={styles.benefitsBox}>
            <h3 className={styles.headingSm}>Hos meg får du</h3>
            <ul className={styles.benefits}>
              <li><CheckCircle className={styles.icon}/> Rask behandling</li>
              <li><Sparkles className={styles.icon}/> Skreddersydd behandling</li>
              <li><MessageSquare className={styles.icon}/> God og effektiv samtale</li>
              <li><Star className={styles.icon}/> Synlige resultater</li>
              <li><Clock className={styles.icon}/> Rask time</li>
              <li><Heart className={styles.icon}/> Stor respekt for hver kunde</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
