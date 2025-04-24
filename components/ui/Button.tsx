import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import clsx from "clsx";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: "primary" | "outline" | "danger";
}

export const Button: FC<Props> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const cn = clsx(
    className,
    "btn",
    {
      primary: "btn_primary",
      outline: "btn_outline",
      danger: "",
    }[variant]
  );
  return (
    <button className={cn} {...props}>
      {children}
    </button>
  );
};
