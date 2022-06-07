import { FC, useState, useCallback, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { ActiveLink } from "../components/ActiveLink";
import Navigation from "../components/Navigation";
import Image from "next/image";

import styles from "../styles/layout.module.css";
import emailSvg from "../../public/images/layout/contacts/email.svg";
import linkedinSvg from "../../public/images/layout/contacts/linkedin.svg";
import vkSvg from "../../public/images/layout/contacts/vk.svg";
import githubSvg from "../../public/images/layout/contacts/github.svg";
import html5Svg from "../../public/images/layout/tech/html5.svg";
import css3Svg from "../../public/images/layout/tech/css3.svg";
import reactSvg from "../../public/images/layout/tech/react.svg";
import nextjsSvg from "../../public/images/layout/tech/nextjs.svg";

const DefaultLayout: FC = ({ children }) => {
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
    <div className={styles.page} id="top">
      <header className={styles.page__header}>
        <div className={styles.page__sideborders}>
          <ActiveLink href="/" className={styles.logolink}>
            <p className={styles.logolink__title}>Fallout</p>
            <p className={styles.logolink__subtitle}>
              Gravedigger{"'"}s<br />
              Original Research
            </p>
          </ActiveLink>
          <Navigation className={styles.headernav} activeClassName={styles.active} />
          <button type="button" className={sandwichButtonClasses} onClick={sandwichButtonClickHandler}></button>
        </div>
      </header>
      <aside className={sandwichPopupClasses}>
        <Navigation activeClassName={styles.active} />
      </aside>
      <main className={styles.page__main}>
        <div className={styles.page__sideborders}>
          {children}
        </div>
      </main>
      <footer className={styles.page__footer}>
        <div className={styles.page__sideborders}>
          <section className={styles.footertoplink}>
            <a href="#top">Наверх &uarr;</a>
          </section>
          <section className={styles.footercopyright}>
            <p>
              &copy;2007-{new Date().getFullYear()}, <a href="mailto:kaa_12@mail.ru">Александр Козлов</a>
            </p>
          </section>
          <section className={styles.footerslogan}>
            <p>There{"'"}s two kinds of people in the world: Those with loaded guns, and those who dig. We&nbsp;dig.</p>
          </section>
          <nav className={styles.footerlinks}>
            <ul>
              <li>
                <ActiveLink href="/about" activeClassName={styles.active}>
                  О сайте
                </ActiveLink>
              </li>
              <li>
                <a href="https://github.com/mr9d/fallout-gdor-next">GitHub</a>
              </li>
              <li>
                <ActiveLink href="/about/music" activeClassName={styles.active}>
                  Музыка
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/gallery/dgt-comics" activeClassName={styles.active}>
                  Комикс DGT
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/gallery/dvg-comics" activeClassName={styles.active}>
                  Комикс DVG
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/todo" activeClassName={styles.active}>
                  Бродилка
                </ActiveLink>
              </li>
              <li>
                <ActiveLink href="/about/links" activeClassName={styles.active}>
                  Ссылки
                </ActiveLink>
              </li>
            </ul>
          </nav>
          <section className={styles.footertechnologies}>
            <ul>
              <li>
                <Image src={html5Svg} layout="fill" alt="HTML5" />
              </li>
              <li>
                <Image src={css3Svg} layout="fill" alt="CSS3" />
              </li>
              <li>
                <Image src={reactSvg} layout="fill" alt="React" />
              </li>
              <li>
                <Image src={nextjsSvg} layout="fill" alt="Next.js" />
              </li>
            </ul>
          </section>
          <section className={styles.footerlegal}>
            <p>Использование материалов сайта только с письменного разрешения&nbsp;автора</p>
          </section>
          <section className={styles.footercontacts}>
            <ul>
              <li>
                <a href="mailto:kaa_12@mail.ru">
                  <Image src={emailSvg} width={30} height={30} alt="Электронная почта" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mrgd/">
                  <Image src={linkedinSvg} width={30} height={30} alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="https://vk.com/gravedigger">
                  <Image src={vkSvg} width={30} height={30} alt="VK" />
                </a>
              </li>
              <li>
                <a href="https://github.com/mr9d/fallout-gdor-next">
                  <Image src={githubSvg} width={30} height={30} alt="GitHub" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default DefaultLayout;
