import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { ActiveLink } from "./ActiveLink";

type NavigationProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  activeClassName?: string;
};

const Navigation: FC<NavigationProps> = ({ activeClassName, ...props }): JSX.Element => {
  return (
    <nav {...props}>
      <h2>Навигация по сайту</h2>
      <section>
        <h3>Археология</h3>
        <ul>
          <li>
            <ActiveLink href="/diggings/locations" activeClassName={activeClassName}>
              Локации
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/diggings/persons" activeClassName={activeClassName}>
              Персонажи
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/diggings/others" activeClassName={activeClassName}>
              Остальное
            </ActiveLink>
          </li>
        </ul>
      </section>
      <section>
        <h3>Исследования</h3>
        <ul>
          <li>
            <ActiveLink href="/articles/fallout1-2" activeClassName={activeClassName}>
              Fallout 1-2
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/articles/fallout3" activeClassName={activeClassName}>
              Fallout 3
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/articles/humor" activeClassName={activeClassName}>
              Юмор
            </ActiveLink>
          </li>
        </ul>
      </section>
      <section>
        <h3>Дополнительно</h3>
        <ul>
          <li>
            <ActiveLink href="/files" activeClassName={activeClassName}>
              Файлы
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/gallery" activeClassName={activeClassName}>
              Галерея
            </ActiveLink>
          </li>
          <li>
            <ActiveLink href="/about" activeClassName={activeClassName}>
              О сайте
            </ActiveLink>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navigation;
