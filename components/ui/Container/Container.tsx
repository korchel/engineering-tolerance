import { FC, PropsWithChildren } from "react";

import styles from "./Container.module.scss";
import clsx from "clsx";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return <div className={clsx(className, styles.container)}>{children}</div>;
};
