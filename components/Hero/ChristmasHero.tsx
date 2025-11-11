import Image from "next/image";
import styles from "./ChristmasHero.module.css";

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
  const CTA =
    cta &&
    (isExternal ? (
      <a className={styles.btn} href={cta.href} target="_blank" rel="noopener noreferrer nofollow">
        {cta.label}
      </a>
    ) : (
      <a className={styles.btn} href={cta.href}>{cta.label}</a>
    ));

  return (
    <section className={[styles.hero, styles.full].join(" ")} aria-labelledby="xmas-hero-title">
      {/* šakelės kaip atskiri sluoksniai */}
      <div className={styles.branchesTop} aria-hidden />
      <div className={styles.branchesBottom} aria-hidden />

      <div className={styles.grid}>
        <div className={[styles.text, styles[`align-${align}`]].join(" ")}>
          <div className={styles.content}>
            <h1 id="xmas-hero-title" className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {CTA && <div className={styles.ctaDesktop}>{CTA}</div>}
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

        {CTA && <div className={styles.ctaMobile}>{CTA}</div>}
      </div>
    </section>
  );
}
