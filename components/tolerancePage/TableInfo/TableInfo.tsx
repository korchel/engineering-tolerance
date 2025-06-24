"use client";

import { FC } from "react";
import { Grid, Label, Tag } from "../../ui";

import { InputDeviationsData, IToleranceData } from "../../../types";
import styles from "./TableInfo.module.scss";
import { Legend } from "../Legend/Legend";
import { DeviationInputs } from "../DeviationInputs/DeviationInputs";

interface Props {
  size: number;
  data: IToleranceData;
  setInputDeviations: (data: InputDeviationsData) => void;
}

export const TableInfo: FC<Props> = ({ size, data, setInputDeviations }) => {
  const { upperDeviation, lowerDeviation, toleranceName, grade } = data;

  return (
    <div>
      <div className={styles.columns}>
        <DeviationInputs setInputDeviations={setInputDeviations} />
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
