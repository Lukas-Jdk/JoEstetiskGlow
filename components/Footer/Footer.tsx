// components/Footer.tsx
import styles from "./Footer.module.css";
import { info } from "@/data/info";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={styles.footerContainer}
      role="contentinfo"
      aria-label="Bunnseksjon"
    >
      <div className={styles.footerWrapper}>
        <p>
          © {year} {info.name}. Alle rettigheter reservert.
        </p>
        <a href="/privacy"> Personvern</a> |<a href="/terms"> Vilkår</a>
        {/* Nematoma, bet prieinama kontaktų semantika (nekeičia dizaino) */}
        <address className="sr-only" aria-label="Kontaktinformasjon">
          {info.name} — {info.address}. Telefon:{" "}
          <a href={`tel:${info.phone}`}>{info.phone}</a>. E-post:{" "}
          <a href={`mailto:${info.email}`}>{info.email}</a>.
        </address>
      </div>
    </footer>
  );
}
