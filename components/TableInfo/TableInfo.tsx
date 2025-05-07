"use client";

import { FC } from "react";
import { Grid, Input, Label, Tag, Title } from "../ui";

import { IToleranceData } from "../../types/types";
import styles from "./TableInfo.module.css";
import clsx from "clsx";
import { Legend } from "../Legend/Legend";

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
        <Legend className={styles.justifyRight} />
        <Grid>
          <Label>Номинальный размер, мм:</Label>
          <Tag>{size}</Tag>
          <Label>Класс:</Label>
          <Tag>{toleranceName + grade}</Tag>
          <Label>Верхнее отклонение, мкм:</Label>
          <Tag>{upperDeviation}</Tag>
          <Label>Нижнее отклонение, мкм:</Label>
          <Tag>{lowerDeviation}</Tag>
        </Grid>
      </div>
    </div>
  );
};
