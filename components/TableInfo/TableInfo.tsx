"use client";

import { useSearchParams } from "next/navigation";
import { FC, ReactNode } from "react";
import { Grid, Input, Tag } from "../ui";
import { useAppStore } from "../../store/store";
import { DimensionType } from "../../types/types";
import styles from "./TableInfo.module.css";

interface Props {
  type: DimensionType;
}

export const TableInfo: FC<Props> = ({ type }) => {
  const {
    size,
    [type]: {
      toleranceGrade,
      deviations: { upperDeviation, lowerDeviation },
    },
  } = useAppStore((state) => state);
  return (
    <div>
      <div className={styles.columns}>
        <Grid>
          <h3 className={styles.grid__span2}>Подбор допуска</h3>
          <Input
            label="Верхнее отклонение:"
            name="upperDeviation"
            type="number"
          />
          <Input
            label="Нижнее отклонение:"
            name="lowerDeviation"
            type="number"
          />
        </Grid>

        <Grid>
          <div>Номинальный размер:</div>
          <Tag>{size}</Tag>
          <div>Класс:</div>
          <Tag>{toleranceGrade}</Tag>
          <div>Верхнее отклонение:</div>
          <Tag>{upperDeviation}</Tag>
          <div>Нижнее отклонение:</div>
          <Tag>{lowerDeviation}</Tag>
        </Grid>
      </div>
    </div>
  );
};
