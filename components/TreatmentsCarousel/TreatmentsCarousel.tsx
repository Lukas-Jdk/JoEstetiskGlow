"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  speedPxPerSec?: number;
  className?: string;
};

export default function TreatmentsCarousel({
  items,
  speedPxPerSec = 60,
  className,
}: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [perView, setPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(300);
  const [gapPx, setGapPx] = useState(16);

  // Didesnė kopijų seka sklandžiam loop'ui
  const extended = useMemo(() => [...items, ...items, ...items], [items]);

  // Layout skaičiavimai
  useEffect(() => {
    const recalc = () => {
      const vp = viewportRef.current;
      const tr = trackRef.current;
      if (!vp || !tr) return;

      const vw = vp.clientWidth || vp.getBoundingClientRect().width || window.innerWidth;
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

  // Nuolatinis slinkimas į kairę (RAF)
  const [translateX, setTranslateX] = useState(0);
  const hoverRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    const stepPx = cardWidth + gapPx;
    const oneSetWidth = items.length * stepPx;
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
    const speed = (isMobile ? speedPxPerSec * 0.75 : speedPxPerSec);
    const speedPerMs = speed / 1000;

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = ts - lastTsRef.current;
      lastTsRef.current = ts;

      if (!hoverRef.current) {
        setTranslateX((prev) => {
          let next = prev - dt * speedPerMs; // judam į kairę
          // kai nuvažiavom daugiau nei vieno rinkinio plotis — grąžinam
          if (Math.abs(next) >= oneSetWidth) next += oneSetWidth;
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
  const normalized = ((-translateX % (items.length * stepPx)) + (items.length * stepPx)) % (items.length * stepPx);
  const activeIndex = Math.floor(normalized / stepPx) % items.length;

  // Peršokimas į konkrečią kortelę (spaudžiant dot)
  const jumpTo = (i: number) => {
    hoverRef.current = true; // pauzė
    setTranslateX(-i * stepPx);
    // po 2s vėl paleidžiam slinktį
    setTimeout(() => {
      hoverRef.current = false;
      lastTsRef.current = null;
    }, 2000);
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

        <div
          ref={viewportRef}
          className={styles.viewport}
          style={
            {
              ["--gap" as any]: `${gapPx}px`,
              ["--card-width" as any]: `${cardWidth}px`,
            } as React.CSSProperties
          }
        >
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

        {/* ✅ Dots grąžinti – gali peršokti į reikiamą kortelę */}
        <div className={styles.footerDots}>
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              className={i === activeIndex ? styles.dotActive : styles.dot}
              onClick={() => jumpTo(i)}
              aria-label={`Gå til element ${i + 1}`}
              aria-selected={i === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
