import { DetailedHTMLProps, FC, PropsWithChildren } from "react";

import styles from "../styles/disclaimer.module.css";

export const Disclaimer: FC<DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({
  children,
  ...props
}: PropsWithChildren<DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>>) => {
  return <article className={styles.disclaimer} {...props}>{children}</article>;
};
