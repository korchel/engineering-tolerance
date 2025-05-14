"use client";

import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

import { BookIcon, CrossIcon } from "../icons";
import style from "./ButtonIcon.module.css";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  iconType: string;
  className?: string;
}

export const ButtonIcon: FC<Props> = ({ iconType, className, ...props }) => {
  const Icon = {
    book: <BookIcon />,
    cross: <CrossIcon />,
  }[iconType];
  return (
    <button type="button" {...props} className={clsx(className, style.btnIcon)}>
      {" "}
      {Icon}
    </button>
  );
};
