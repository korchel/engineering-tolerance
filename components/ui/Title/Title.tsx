import React, { FC, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Title.module.css";

interface Props {
  level?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}

export const Title: FC<Props> = ({ level = "h1", children, className }) => {
  return React.createElement(
    level,
    { className: clsx(className, styles.title) },
    children
  );
};
