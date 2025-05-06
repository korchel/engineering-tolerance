"use client";

import { FC } from "react";
import { Grid, Input, Tag, Title } from "../ui";

import { IToleranceData } from "../../types/types";
import styles from "./TableInfo.module.css";

interface Props {
  size: number;
  data: IToleranceData;
}

export const TableInfo: FC<Props> = ({ size, data }) => {
  const { upperDeviation, lowerDeviation, toleranceName, grade } = data;

  return (
    <div>
      <div className={styles.columns}>
        <Grid>
          <Title level="h3" className={styles.title}>
            Подбор допуска
          </Title>
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
          <div>Номинальный размер, мм:</div>
          <Tag>{size}</Tag>
          <div>Класс:</div>
          <Tag>{toleranceName + grade}</Tag>
          <div>Верхнее отклонение, мкм:</div>
          <Tag>{upperDeviation}</Tag>
          <div>Нижнее отклонение, мкм:</div>
          <Tag>{lowerDeviation}</Tag>
        </Grid>
      </div>
    </div>
  );
};
