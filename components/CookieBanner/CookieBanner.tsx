"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Informasjon om informasjonskapsler">
      <p>
        Vi bruker kun nødvendige tekniske cookies for at nettstedet skal fungere korrekt.
        Ingen sporingsverktøy benyttes.
      </p>
      <button onClick={accept} className={styles.button} aria-label="Godta cookies">
        OK
      </button>
    </div>
  );
}
