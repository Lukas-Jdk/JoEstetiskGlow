
// app/prices/page.tsx
import styles from "./page.module.css";
import { procedureGroups } from "@/data/procedures";
import BookButton from "@/components/BookButton/BookButton";
import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Priser | Jo Estetisk Glow",
  description:
    "Transparente priser på injeksjoner, hudbehandlinger og laser. Kvalitet og naturlige resultater hos Jo Estetisk Glow i Oslo.",
  alternates: { canonical: "/prices" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Priser | Jo Estetisk Glow",
    description:
      "Transparente priser på injeksjoner, hudbehandlinger og laser. Kvalitet og naturlige resultater.",
    url: "/prices",
    type: "website",
  },
};

export default function PricesPage() {
  // 🔎 Breadcrumbs JSON-LD
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hjem", item: `${site.siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Priser", item: `${site.siteUrl}/prices` },
    ],
  };

  // ❓ FAQ JSON-LD (be UI – jokio dizaino pokyčio)
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Trenger jeg konsultasjon før behandling?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Ja, vi anbefaler alltid en kort faglig vurdering før første behandling for å avklare mål, forventninger og kontraindikasjoner.",
        },
      },
      {
        "@type": "Question",
        name: "Hvor lenge varer resultatene?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Varighet avhenger av behandlingstype og individuelle faktorer. For eksempel kan botox vare 3–6 måneder, mens hudforbedrende behandlinger bygger effekt over flere uker.",
        },
      },
      {
        "@type": "Question",
        name: "Er bildene på nettsiden representative for faktiske kunder?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Bildene er illustrative for å vise ulike behandlingstyper og resultater. Individuelle resultater kan variere. Rådfør deg alltid med behandler før beslutning.",
        },
      },
    ],
  };

  return (
    <>
  

      <main className={styles.pricesContainer}>
        <div className={styles.page}>
          <header className={styles.header}>
            <h1>Priser</h1>
            <p>Transparente priser – kvalitet og naturlige resultater.</p>
          </header>

          {procedureGroups.map((group) => (
            <section
              key={group.id}
              className={styles.section}
              aria-labelledby={`grp-${group.id}`}
            >
              <div className={styles.sectionHead}>
                <h2 id={`grp-${group.id}`}>{group.title}</h2>
                <BookButton className={styles.bookBtn} />
              </div>

              <div className={styles.tableWrap}>
                <table className={styles.table} aria-describedby={`grp-${group.id}`}>
                  <caption className="sr-only">{group.title} – prisliste</caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Behandling</th>
                      <th scope="col">Pris</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={item.id} id={item.id} className={styles.row}>
                        <th scope="row" className={styles.colTitle}>
                          <strong className={styles.tableStrong}>{item.title}</strong>
                          {item.description && (
                            <div className={styles.small}>{item.description}</div>
                          )}
                          {item.note && (
                            <div className={styles.smallMuted}>{item.note}</div>
                          )}
                        </th>
                        <td className={styles.colPrice} data-label="Pris">
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
