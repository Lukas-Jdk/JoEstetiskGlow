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
  return (
    <section className={styles.section} id="kontakt" aria-labelledby="contact-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2>Kontakt oss</h2>
          <div className={styles.dots} aria-hidden />
        </header>

        <div className={styles.grid}>
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
                  <strong>Adresse:</strong>
                  <span>Kalbakken Helse Hus</span>
                  <span>{info.address ?? "—"}</span>
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
            </ul>

            {info.hours && (
              <div className={styles.hours}>
                <h4 className={styles.hoursTitle}>Åpningstider</h4>

                <div className={styles.hoursRow}>
                  <IconBox label="Åpningstider">
                    {/* clock */}
                    <svg viewBox="0 0 24 24" className={styles.icon} aria-hidden="true">
                      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-10.6V7h-2v6l5 3 .9-1.8-3.9-2.8z" />
                    </svg>
                  </IconBox>

                  <ul className={styles.hoursList}>
                    {info.hours.map((h, i) => (
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

          {/* Google Maps Embed */}
          <div className={styles.mapBox}>
            <iframe
              title={`Kart over ${info.name} — ${info.address}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                info.address
              )}&output=embed`}
              width="600"
              height="450"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
