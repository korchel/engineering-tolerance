"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { BookIcon } from "../icons";
import style from "./ButtonIcon.module.css";
import clsx from "clsx";

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
  }[iconType];
  return (
    <button type="button" {...props} className={clsx(className, style.btnIcon)}>
      {" "}
      {Icon}
    </button>
  );
};
