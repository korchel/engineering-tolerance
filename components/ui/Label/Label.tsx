import { FC, ReactNode } from "react";

import styles from "./Label.module.css";

interface Props {
  children: ReactNode;
}

export const Label: FC<Props> = ({ children }) => (
  <div className={styles.label}>{children}</div>
);
