import { FC, useState, useCallback, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { ActiveLink } from "./activelink";

import styles from "../styles/layout.module.css";
import Navigation from "./navigation";

const Layout: FC = ({ children }) => {
  const [sandwichOpened, setSandwichOpened] = useState<boolean>(false);
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (sandwichOpened) {
      setSandwichOpened(false);
    }
    // https://stackoverflow.com/questions/53857063/changing-state-on-route-change-next-js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const sandwichButtonClickHandler = useCallback(() => {
    setSandwichOpened(!sandwichOpened);
  }, [sandwichOpened]);

  const sandwichButtonClasses: string =
    styles.sandwichbutton + (sandwichOpened ? " " + styles.sandwichbutton_opened : "");
  const sandwichPopupClasses: string = styles.sandwichpopup + (sandwichOpened ? " " + styles.sandwichpopup_opened : "");

  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <div className={styles.page__sideborders}>
          <ActiveLink href="/" className={styles.logolink}>
            <div className={styles.logolink__title}>Fallout</div>
            <div className={styles.logolink__subtitle}>
              Gravedigger{"'"}s<br />
              Original Research
            </div>
          </ActiveLink>
          <Navigation className={styles.headernav} activeClassName={styles.active} />
          <button type="button" className={sandwichButtonClasses} onClick={sandwichButtonClickHandler}></button>
        </div>
      </header>
      <aside className={sandwichPopupClasses}>
        <Navigation activeClassName={styles.active} />
      </aside>
      <main className={styles.page__main}>
        <div className={styles.page__sideborders}>{children}</div>
      </main>
      <footer className={styles.page__footer}>
        <div className={styles.page__sideborders}>footer</div>
      </footer>
    </div>
  );
};

export default Layout;
