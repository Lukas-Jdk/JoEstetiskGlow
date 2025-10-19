// components/TreatmentsCarousel.tsx
"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./TreatmentsCarousel.module.css";

export type TreatmentItem = {
  id: string;
  title: string;
  image: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
};

type Props = {
  items: TreatmentItem[];
  /** Horizontalus slinkimo greitis px/s (desktop). Mobile gauna 0.75x. */
  speedPxPerSec?: number;
  className?: string;
};

/** Tipas style prop'ui su CSS var'ais (be `any`). */
type ViewportVars = CSSProperties & {
  ["--gap"]?: string;
  ["--card-width"]?: string;
};

export default function TreatmentsCarousel({
  items,
  speedPxPerSec = 60,
  className,
}: Props) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [perView, setPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [gapPx, setGapPx] = useState(16);

  // Didesnė kopijų seka sklandžiam "loop'ui"
  const extended = useMemo(() => [...items, ...items, ...items], [items]);

  // Išdėstymo skaičiavimai (kortelės plotis, gap, perView)
  useEffect(() => {
    const recalc = () => {
      const vp = viewportRef.current;
      const tr = trackRef.current;
      if (!vp || !tr) return;

      const vw = vp.clientWidth || vp.getBoundingClientRect().width;
      const pv = vw <= 640 ? 1 : vw <= 1024 ? 2 : 3;
      setPerView(pv);

      const cs = getComputedStyle(tr);
      const g = parseFloat(cs.columnGap || cs.gap || "16") || 16;
      setGapPx(g);

      let width = (vw - g * (pv - 1)) / pv;
      if (!width || width < 10) width = (window.innerWidth - g * (pv - 1)) / pv;
      setCardWidth(Math.max(240, Math.min(420, Math.floor(width))));
    };

    const ro = new ResizeObserver(recalc);
    if (viewportRef.current) ro.observe(viewportRef.current);
    recalc();
    window.addEventListener("resize", recalc);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, []);

  // Nuolatinis slinkimas į kairę (requestAnimationFrame)
  const [translateX, setTranslateX] = useState(0);
  const hoverRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    const stepPx = cardWidth + gapPx;
    const oneSetWidth = items.length * stepPx;
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
    const speed = isMobile ? speedPxPerSec * 0.75 : speedPxPerSec; // mobile lėčiau
    const speedPerMs = speed / 1000;

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!hoverRef.current) {
        setTranslateX(prev => {
          let next = prev - dt * speedPerMs; // judam į kairę
          if (Math.abs(next) >= oneSetWidth) next += oneSetWidth; // "wrap"
          return next;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTsRef.current = null;
    };
  }, [cardWidth, gapPx, items.length, speedPxPerSec]);

  // Aktyvus indeksas (dot’ams)
  const stepPx = cardWidth + gapPx;
  const total = items.length * stepPx;
  const normalized = ((-translateX % total) + total) % total;
  const activeIndex = Math.floor(normalized / stepPx) % items.length;

  // Peršokimas į konkrečią kortelę (paspaudus dot) + 2s pauzė
  const jumpTo = (i: number) => {
    hoverRef.current = true;
    setTranslateX(-i * stepPx);
    setTimeout(() => {
      hoverRef.current = false;
      lastTsRef.current = null;
    }, 2000);
  };

  // CSS var'ai be `any`
  const viewportStyle: ViewportVars = {
    ["--gap"]: `${gapPx}px`,
    ["--card-width"]: `${cardWidth}px`,
  };

  return (
    <section className={styles.caruseleContainer}>
      <div
        className={[styles.carousel, className].filter(Boolean).join(" ")}
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
      >
        <div className={styles.header}>
          <h2>Behandlinger</h2>
        </div>

        <div ref={viewportRef} className={styles.viewport} style={viewportStyle}>
          <div
            ref={trackRef}
            className={styles.track}
            style={{ transform: `translate3d(${translateX}px,0,0)` }}
          >
            {extended.map((item, i) => (
              <article className={styles.card} key={`${item.id}-${i}`}>
                <div className={styles.media}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:640px) 90vw, (max-width:1024px) 45vw, 30vw"
                    className={styles.img}
                    priority={i < perView}
                  />
                </div>

                <div className={styles.body}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <ul className={styles.list}>
                    {item.bullets.slice(0, 3).map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  <a className={styles.btn} href={item.ctaHref}>
                    {item.ctaLabel}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots – peršokimas į pasirinktą kortelę */}
        <div className={styles.footerDots}>
          {items.map((_, i) => {
            const active = i === activeIndex;
            return (
              <button
                type="button"
                key={i}
                className={active ? styles.dotActive : styles.dot}
                onClick={() => jumpTo(i)}
                aria-label={`Gå til element ${i + 1}`}
                aria-pressed={active}   /* vietoj aria-selected */
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
