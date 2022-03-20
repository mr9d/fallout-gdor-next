import { FC, useState, useCallback, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { ActiveLink } from "./activelink";

import styles from "../styles/layout.module.css";

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

  const sandwichButtonClasses: string = styles.sandwichbutton + (sandwichOpened ? " " + styles.sandwichbutton_opened : "");
  const sandwichPopupClasses: string = styles.sandwichpopup + (sandwichOpened ? " " + styles.sandwichpopup_opened : "");

  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <div className={styles.page__sideborders}>
          <ActiveLink href="/" className={styles.logolink} activeClassName="active">
            <div className={styles.logolink__title}>Fallout</div>
            <div className={styles.logolink__subtitle}>Gravedigger{"'"}s<br />Original Research</div>
          </ActiveLink>
          <button type="button" className={sandwichButtonClasses} onClick={sandwichButtonClickHandler}></button>
        </div>
      </header>
      <aside className={sandwichPopupClasses}>
        <nav>
          <h2>Навигация по сайту</h2>
          <section>
            <h3>Археология</h3>
            <ul>
              <li>
                <ActiveLink href="/diggings/locations" className={""} activeClassName="active">Локации</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/diggings/persons" className={""} activeClassName="active">Персонажи</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/diggings/others" className={""} activeClassName="active">Остальное</ActiveLink>
              </li>
            </ul>
          </section>
          <section>
            <h3>Исследования</h3>
            <ul>
              <li>
                <ActiveLink href="/articles/fallout1-2" className={""} activeClassName="active">Fallout 1-2</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/articles/fallout3" className={""} activeClassName="active">Fallout 3</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/articles/humor" className={""} activeClassName="active">Юмор</ActiveLink>
              </li>
            </ul>
          </section>
          <section>
            <h3>Дополнительно</h3>
            <ul>
              <li>
                <ActiveLink href="/files" className={""} activeClassName="active">Файлы</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/gallery/wallpapers" className={""} activeClassName="active">Галерея</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/about" className={""} activeClassName="active">О сайте</ActiveLink>
              </li>
            </ul>
          </section>
        </nav>
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
