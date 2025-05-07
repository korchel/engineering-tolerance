import clsx from "clsx";
import styles from "./Legend.module.css";
import { FC } from "react";

interface Props {
  className?: string;
}

export const Legend: FC<Props> = ({ className }) => (
  <div className={clsx(styles.legend, className)}>
    <div className={clsx(styles.legendItem, styles.recommended)}></div>
    <div>Рекомендуемые</div>
    <div className={clsx(styles.legendItem, styles.common)}></div>
    <div>Основные</div>
    <div className={clsx(styles.legendItem, styles.special)}></div>
    <div>Специальные</div>
    <div className={clsx(styles.legendItem, styles.norForFits)}>*</div>
    <div>Не для посадок</div>
  </div>
);
