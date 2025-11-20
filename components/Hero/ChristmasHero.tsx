// components/ChristmasHero/ChristmasHero.tsx
import Image from "next/image";
import styles from "./ChristmasHero.module.css";
import GaveKort from "@/components/BookButton/GaveKort";

type Align = "left" | "center" | "right";

interface Props {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  align?: Align;
  cta?: { label: string; href: string };
  priority?: boolean;
}

export default function ChristmasHero({
  title,
  subtitle,
  image,
  imageAlt,
  align = "left",
  cta,
  priority,
}: Props) {
  const isExternal = /^https?:\/\//i.test(cta?.href ?? "");

  const MainCTA = cta ? (
    isExternal ? (
      <a className={styles.btn} href={cta.href} target="_blank" rel="noopener noreferrer nofollow">
        {cta.label}
      </a>
    ) : (
      <a className={styles.btn} href={cta.href}>{cta.label}</a>
    )
  ) : null;

  const CTAGroup =
    MainCTA && (
      <div className={styles.ctaGroup}>
        {MainCTA}
        <GaveKort className={styles.btn} label="Bestill gavekort" />
      </div>
    );

  return (
    <section className={[styles.hero, styles.full].join(" ")} aria-labelledby="xmas-hero-title">
      <div className={styles.branchesTop} aria-hidden />
      <div className={styles.branchesBottom} aria-hidden />

      <div className={styles.grid}>
        <div className={[styles.text, styles[`align-${align}`]].join(" ")}>
          <div className={styles.content}>
            <h1 id="xmas-hero-title" className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {CTAGroup && <div className={styles.ctaDesktop}>{CTAGroup}</div>}
          </div>
        </div>

        <div className={styles.media}>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority={priority}
            sizes="(max-width: 900px) 100vw, (max-width: 1400px) 48vw, 672px"
            className={styles.img}
          />
        </div>

        {/* CTA mobile */}
        {CTAGroup && <div className={styles.ctaMobile}>{CTAGroup}</div>}
      </div>
    </section>
  );
}
