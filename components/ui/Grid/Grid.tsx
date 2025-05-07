import { FC, ReactNode } from "react";
import styles from "./Grid.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Grid: FC<Props> = ({ children, className }) => (
  <div className={clsx(styles.grid, className)}>{children}</div>
);
