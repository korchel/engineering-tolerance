import { FC, PropsWithChildren } from "react";

import styles from "./Container.module.css";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
