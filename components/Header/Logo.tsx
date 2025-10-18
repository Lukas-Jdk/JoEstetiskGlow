// components/Logo.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
      <Link href="/" aria-label="Estetisk Glow — gå til forsiden" className={styles.logo}>
      <Image
        src="/logo11.png"
        alt="Estetisk Glow — logo"
        width={200}
        height={100}
        priority
        sizes="(max-width: 600px) 160px, 200px"
      />
      <div className={styles.logoText}>
        <span>JEG</span>
       
      </div>
    </Link>
 
  );
}
