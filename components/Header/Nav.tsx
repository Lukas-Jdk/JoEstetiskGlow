// components/Nav.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const menuRootRef = useRef<HTMLDivElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const lastLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // body scroll lock kai atidaryta
  useEffect(() => {
    const original = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = original;
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // focus trap ir autofocus ant pirmo linko
  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const first = firstLinkRef.current;
      const last = lastLinkRef.current;
      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const toggle = () => setOpen(v => !v);
  const close  = () => setOpen(false);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className={styles.menuRoot} ref={menuRootRef}>
      <button
        className={`${styles.burger} ${open ? styles.open : ""}`}
        aria-label={open ? "Lukk meny" : "Åpne meny"}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={toggle}
      >
        <span/><span/><span/>
      </button>

      {open && <div className={styles.overlay} onClick={close} aria-hidden="true" />}

      <nav
        id="primary-nav"
        className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        aria-label="Hovedmeny"
      >
        <ul className={styles.navBar} onClick={close}>
          <li>
            <Link
              href="/"
              ref={firstLinkRef}
              aria-current={isActive("/") ? "page" : undefined}
            >
              Hjem
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              aria-current={isActive("/about") ? "page" : undefined}
            >
              Om Oss
            </Link>
          </li>
          {/* <li>
            <Link
              href="/procedures"
              aria-current={isActive("/procedures") ? "page" : undefined}
            >
              Behandlinger
            </Link>
          </li> */}
          <li>
            <Link
              href="/prices"
              aria-current={isActive("/prices") ? "page" : undefined}
            >
              Priser
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              aria-current={isActive("/contact") ? "page" : undefined}
              ref={lastLinkRef}
            >
              Kontakt Oss
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
