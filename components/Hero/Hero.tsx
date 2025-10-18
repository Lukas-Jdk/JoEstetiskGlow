import Image from "next/image";
import styles from "./Hero.module.css";

type Align = "center" | "left" | "right";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string; 
  fullHeight?: boolean;
  overlay?: number;
  align?: Align;
  focalX?: string;
  cta?: { label: string; href: string };
  priority?: boolean;
}

export default function Hero({
  title,
  subtitle,
  image,
  imageAlt,
  fullHeight = true,
  overlay = 0.3,
  align = "left",
  focalX = "95%",
  cta,
  priority = false,
}: HeroProps) {
   const isExternal = /^https?:\/\//i.test(cta?.href ?? "");
  return (
     <section
      className={[styles.hero, fullHeight ? styles.full : styles.compact].join(" ")}
      aria-labelledby="hero-title"
      role="region"
    >
      <div className={styles.grid}>
        <div className={[styles.text, styles[`align-${align}`]].join(" ")}>
          <div className={styles.content}>
            <h1 id="hero-title" className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {cta && (
              isExternal ? (
                <a
                  className={styles.btn}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {cta.label} <span className="sr-only">(åpnes i ny fane)</span>
                </a>
              ) : (
                <a className={styles.btn} href={cta.href}>
                  {cta.label}
                </a>
              )
            )}
          </div>
        </div>

        <div
          className={styles.media}
          style={{ ["--focal-x" as any]: focalX, ["--overlay" as any]: overlay }}
        >
          <Image
            src={image}
            alt={imageAlt ?? ""}   // jei nepaduota — dekoratyvu
            fill
            priority={priority}
            sizes="(max-width: 900px) 100vw, (max-width: 1400px) 48vw, 672px"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  );
}
