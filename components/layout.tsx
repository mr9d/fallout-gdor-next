import { FC } from "react";
import styles from "../styles/layout.module.css";
import { ActiveLink } from "./activelink";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <div className={styles.wrapper}>
          <ActiveLink href="/" className={styles.logolink} activeClassName="active">
            Home
          </ActiveLink>
        </div>
      </header>
      <main className={styles.page__main}>
        <div className={styles.wrapper}>{children}</div>
      </main>
      <footer className={styles.page__footer}>
        <div className={styles.wrapper}>footer</div>
      </footer>
    </div>
  );
};

export default Layout;
