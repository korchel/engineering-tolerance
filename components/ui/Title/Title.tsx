import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Title.module.scss";

interface Props {
  level?: "h1" | "h2" | "h3" | "h4";
  children: ReactNode;
  centered?: boolean;
  className?: string;
}

export const Title: FC<Props> = ({
  level = "h1",
  centered = false,
  children,
  className,
}) => {
  return React.createElement(
    level,
    {
      className: clsx(className, styles.title, { [styles.centered]: centered }),
    },
    children
  );
};
