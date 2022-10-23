import Link from "next/link";
import { FC } from "react";

import styles from "../styles/news.module.css";

export const NewsAllLink: FC = () => {
  return (
    <section className={styles.newsalllink}>
      <Link href="/about/news-archive">
        Все новости &gt;
      </Link>
    </section>
  );
};
