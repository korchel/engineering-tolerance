import { FC, ReactNode } from "react";
import styles from "./Grid.module.css";

interface Props {
  children: ReactNode;
}

export const Grid: FC<Props> = ({ children }) => (
  <div className={styles.grid}>{children}</div>
);
