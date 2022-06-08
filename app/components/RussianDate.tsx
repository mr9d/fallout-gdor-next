import { FC } from "react";

import styles from "../styles/russiandate.module.css";

type RussianDateProps = {
  date: Date;
};

const MONTH_NAMES = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const RussianDate: FC<RussianDateProps> = ({ date }: RussianDateProps) => {
  return (
    <>
      <span className={styles.russiandate__long}>
        {date.getDate()} {MONTH_NAMES[date.getMonth()]} {date.getFullYear()} года
      </span>
      <span className={styles.russiandate__short}>
        {date.getDate()}.{(date.getMonth() < 9 ? "0" : "") + (date.getMonth() + 1)}.{date.getFullYear()} г.
      </span>
    </>
  );
};
