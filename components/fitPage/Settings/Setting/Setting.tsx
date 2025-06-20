"use client";

import Link from "next/link";
import { FC } from "react";
import clsx from "clsx";

import styles from "./Setting.module.css";
import { ButtonIcon, Tag, Title } from "../../../ui";
import { DimensionType } from "../../../../types";
import { useAppStore } from "../../../../store";

interface Props {
  type: DimensionType;
}

export const Setting: FC<Props> = ({ type }) => {
  const {
    size,
    [type]: {
      deviations: { upperDeviation, lowerDeviation },
      toleranceName,
      grade,
    },
  } = useAppStore((state) => state);

  return (
    <>
      <Title level="h3" className={styles.title}>
        {type === "shaft" ? "Вал" : "Отверстие"}
      </Title>

      <div className={styles.grid__justifyRight}>класс допуска:</div>
      <div className={clsx(styles.grid__justifyLeft, styles.columns)}>
        <Tag>{toleranceName + grade}</Tag>
        <Link href={`/tolerance/${type}/?size=${size}`}>
          <ButtonIcon iconType="book" />
        </Link>
      </div>

      <div className={styles.grid__justifyRight}>верхнее отклонение, мкм:</div>
      <Tag className={styles.grid__justifyLeft}>{upperDeviation}</Tag>
      <div className={styles.grid__justifyRight}>нижнее отклонение, мкм:</div>
      <Tag className={styles.grid__justifyLeft}>{lowerDeviation}</Tag>
    </>
  );
};
