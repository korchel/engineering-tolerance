import clsx from "clsx";
import { FC, ReactNode } from "react";

import styles from "./Paper.module.css";

interface Props {
  className: string;
  children: ReactNode;
}

export const Paper: FC<Props> = ({ children, className }) => {
  return <div className={clsx(styles.paper, className)}>{children}</div>;
};
