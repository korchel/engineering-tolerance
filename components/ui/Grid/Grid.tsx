import { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Grid.module.css";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Grid: FC<Props> = ({ children, className }) => (
  <div className={clsx(styles.grid, className)}>{children}</div>
);
