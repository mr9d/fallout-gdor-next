import { FC } from "react";
import { NextRouter, useRouter } from "next/router";

import styles from "../styles/breadcrumbs.module.css";
import Link from "next/link";

const PATH_PART_TO_TITLE_MAP: Record<string, string> = {
  about: "О проекте",
  "news-archive": "Архив новостей",
  articles: "Исследования",
  "fallout1-2": "Fallout 1-2",
  fallout3: "Fallout 3",
  humor: "Юмор",
  "post-release": "После релиза",
  "pre-release": "До релиза",
  "van-buren": "Van Buren",
  developers: "От разработчиков",
  fiction: "Рассказы",
  gamers: "От игроков",
  toxic: "Токсичная С.",
  diggings: "Археология",
  locations: "Локации",
  fallout1: "Fallout 1",
  fallout2: "Fallout 2",
  others: "Остальное",
  concepts: "Концепции",
  items: "Предметы",
  persons: "Персонажи",
  files: "Файлы",
  gallery: "Галерея",
};

const getTitle = (pathPart: string): string => {
  return PATH_PART_TO_TITLE_MAP[pathPart] || pathPart;
};

export const Breadcrumbs: FC = () => {
  const router: NextRouter = useRouter();

  const pathParts: string[] = router.pathname.split("/").slice(1).slice(0, -1);

  return (
    <nav className={styles.breadcrumbs}>
      <ul>
        {pathParts.map((pathPart: string, index: number, pathParts: string[]) => {
          const url: string = "/" + pathParts.slice(0, index + 1).join("/");
          return (
            <li key={pathPart}>
              <Link href={url}>{getTitle(pathPart)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
