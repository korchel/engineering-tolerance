"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import clsx from "clsx";

import styles from "./Button.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "outline" | "danger";
}

export const Button: FC<Props> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const cn = clsx(
    className,
    styles.btn,
    {
      primary: styles.btn_primary,
      outline: styles.btn_outline,
      danger: "",
    }[variant]
  );
  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
};
