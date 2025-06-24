import clsx from "clsx";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./CellButton.module.scss";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isRecommendedIT: boolean;
  isCommonIT: boolean;
  isCurrent: boolean;
  isActive: boolean;
  isDisabled: boolean;
  className: string;
}

export const CellButton: FC<Props> = ({
  isRecommendedIT,
  isCommonIT,
  isActive,
  isCurrent,
  isDisabled,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(styles.сellButton, className, {
        [styles.сellButton_normal]: !isRecommendedIT && !isCommonIT,
        [styles.сellButton_common]: isCommonIT && !isRecommendedIT,
        [styles.сellButton_recommended]: isRecommendedIT,
        [styles.сellButton_current]: isCurrent,
        [styles.сellButton_active]: isActive,
        [styles.сellButton_disabled]: isDisabled,
      })}
    >
      {children}
    </button>
  );
};
