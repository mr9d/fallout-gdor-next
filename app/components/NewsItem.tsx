import { FC, PropsWithChildren } from "react";

import styles from "../styles/news.module.css";
import { RussianDate } from "./RussianDate";

type NewsItemProps = {
  date: Date;
};

export const NewsItem: FC<PropsWithChildren<NewsItemProps>> = ({
  children,
  date,
}: PropsWithChildren<NewsItemProps>) => {
  return (
    <article className={styles.newsitem}>
      <p className={styles.newsitem__date}>Дата публикации: <RussianDate date={date} /></p>
      {children}
    </article>
  );
};
