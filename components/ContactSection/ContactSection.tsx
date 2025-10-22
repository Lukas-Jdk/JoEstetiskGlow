// components/ContactSection.tsx
import styles from "./ContactSection.module.css";
import { info } from "@/data/info";
import BookButton from "@/components/BookButton/BookButton";

function IconBox({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className={styles.iconBox} aria-hidden title={label}>
      {children}
    </div>
  );
}

export default function ContactSection() {
  // Adresai žemėlapiams (antrą galima laikyti iš info.address2 jeigu turėsi)
  const address1Label = "Kalbakken Helse Hus";
  const address1 = info.address ?? "—";

  const address2Label = "Klinikk Resplandor";
  const address2 = (info as any).address2 || "Solgansbrisen 5, 1364 Fornebu"; // fallback, kol nėra info.address2

  const hasAddress2 = Boolean(address2 && address2 !== "—");

  return (
    <section
      className={styles.section}
      id="kontakt"
      aria-labelledby="contact-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="contact-title">Kontakt oss</h2>
          <div className={styles.dots} aria-hidden />
        </header>

        <div className={styles.grid}>
          {/* Kairė kortelė */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Kontaktinformasjon</h3>

            <ul className={styles.list} aria-label="Kontaktinformasjon">
              <li>
                <IconBox label="Adresse">
                  {/* location pin */}
                  <svg
                    viewBox="0 0 24 24"
                    className={styles.icon}
                    aria-hidden="true"
                  >
                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </IconBox>
                <div className={styles.itemBody}>
                  <strong>Adresse 1:</strong>
                  <span>{address1Label}</span>
                  <span>{address1}</span>
                </div>
              </li>

              <li>
                <IconBox label="Adresse">
                  {/* location pin */}
                  <svg
                    viewBox="0 0 24 24"
                    className={styles.icon}
                    aria-hidden="true"
                  >
                    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12zm0-9a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </IconBox>
                <div className={styles.itemBody}>
                  <strong>Adresse 2:</strong>
                  <span>{address2Label}</span>
                  <span>{address2}</span>
                </div>
              </li>

              <li>
                <IconBox label="Telefon">
                  {/* phone */}
                  <svg
                    viewBox="0 0 24 24"
                    className={styles.icon}
                    aria-hidden="true"
                  >
                    <path d="M21 16.5c0 .7-.5 1.6-1.2 1.8-1.3.4-2.7.7-3.2.7-4.9 0-10.9-6-10.9-10.9 0-.5.3-1.9.7-3.2C6.6 4 7.5 3.5 8.2 3.5h.7c.5 0 .9.3 1 .8l.6 2.3c.1.5 0 .9-.3 1.3l-1 1.1c.9 1.9 2.4 3.4 4.3 4.3l1.1-1c.4-.3.9-.4 1.3-.3l2.3.6c.5.1.8.5.8 1v.9z" />
                  </svg>
                </IconBox>
                <div className={styles.itemBody}>
                  <strong>Telefon:</strong>
                  <a href={`tel:${info.phone}`}>{info.phone}</a>
                </div>
              </li>

              <li>
                <IconBox label="E-post">
                  {/* mail */}
                  <svg
                    viewBox="0 0 24 24"
                    className={styles.icon}
                    aria-hidden="true"
                  >
                    <path d="M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 3-8 5-8-5V7l8 5 8-5v1z" />
                  </svg>
                </IconBox>
                <div className={styles.itemBody}>
                  <strong>E-post:</strong>
                  <a href={`mailto:${info.email}`}>{info.email}</a>
                </div>
              </li>
        

            <li>
              <IconBox label="Facebook">
                {/* Facebook */}
                <svg
                  viewBox="0 0 24 24"
                  className={styles.icon}
                  aria-hidden="true"
                >
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.01H7.9v-2.93h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.86h2.78l-.44 2.93h-2.34V22C18.34 21.2 22 17.08 22 12.06z" />
                </svg>
              </IconBox>
              <div className={styles.itemBody}>
                <strong>Facebook:</strong>
                <a className={styles.facebook}
                  href={
                    (info as any)?.social?.facebook ??
                    "https://www.facebook.com/kunoirsielosterapija"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(info as any)?.social?.facebook ??
                    "facebook.com/kunoirsielosterapija"}
                </a>
              </div>
            </li>
    </ul>
            {info.hours && (
              <div className={styles.hours}>
                <h4 className={styles.hoursTitle}>Åpningstider</h4>

                <div className={styles.hoursRow}>
                  <IconBox label="Åpningstider">
                    {/* clock */}
                    <svg
                      viewBox="0 0 24 24"
                      className={styles.icon}
                      aria-hidden="true"
                    >
                      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-10.6V7h-2v6l5 3 .9-1.8-3.9-2.8z" />
                    </svg>
                  </IconBox>

                  <ul className={styles.hoursList}>
                    {info.hours.map((h: any, i: number) => (
                      <li key={i} className={styles.hoursItem}>
                        <span className={styles.day}>{h.day}</span>
                        <span className={styles.time}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className={styles.ctaRow}>
              <BookButton className={styles.bookBtn} />
            </div>
          </div>

          {/* Dešinė – dvigubas Maps grid */}
          <div className={styles.mapGrid} aria-label="Kart over begge adresser">
            {/* Map 1 */}
            <div className={styles.mapBox}>
              <div className={styles.mapHead}>
                <strong className={styles.mapTitle}>{address1Label}</strong>
                <span className={styles.mapAddress}>{address1}</span>
              </div>
              <iframe
                title={`Kart over ${address1Label} — ${address1}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  address1
                )}&output=embed`}
              />
            </div>

            {/* Map 2 (rodom tik jei turime antrą adresą) */}
            {hasAddress2 && (
              <div className={styles.mapBox}>
                <div className={styles.mapHead}>
                  <strong className={styles.mapTitle}>{address2Label}</strong>
                  <span className={styles.mapAddress}>{address2}</span>
                </div>
                <iframe
                  title={`Kart over ${address2Label} — ${address2}`}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    address2
                  )}&output=embed`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
