import { FC, ReactNode } from "react";

import styles from "./Tag.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Tag: FC<Props> = ({ children }) => {
  return <div className={styles.tag}>{children}</div>;
};
