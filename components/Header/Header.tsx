// components/Header.tsx
import Nav from "./Nav";
import Logo from "./Logo"
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.headerContainer} role="banner" aria-label="Toppseksjon">
      <div className={styles.headerWrapper}>
       <Logo />
        <Nav />
      </div>
    </header>
  );
}
