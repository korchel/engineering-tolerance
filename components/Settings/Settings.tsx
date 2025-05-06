"use client";

import { ChangeEventHandler } from "react";

import styles from "./Settings.module.css";
import { useAppStore } from "../../store/store";
import { Setting } from "./Setting/Setting";
import { Button, Grid, Tag, Input } from "../ui";
import { createPDF } from "../../lib";

export const Settings = () => {
  const {
    size,
    shaft: { toleranceName: shaftTolerance, grade: shaftGrade },
    hole: { toleranceName: holeTolerance, grade: holeGrade },
    setSize,
  } = useAppStore((state) => state);

  const shaftIT = shaftTolerance + shaftGrade;
  const holeIT = holeTolerance + holeGrade;

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSize(Number(event.target.value));
  };

  return (
    <div className={styles.settings}>
      <Grid>
        <Input
          name={"size"}
          label={"Номинальный размер, мм:"}
          onChange={(e) => onChange(e)}
          value={size}
        />
        <div>Посадка:</div>
        <Tag>
          {holeIT} / {shaftIT}{" "}
        </Tag>
        <Setting type="hole" />
        <Setting type="shaft" />
      </Grid>
      <Button
        onClick={() => createPDF(`${holeIT}${shaftIT}`)}
        variant="primary"
      >
        Сохранить схему
      </Button>
    </div>
  );
};

// const getQuery = (data: Pick<IState, "hole" | "shaft" | "size">) => {
//   const { size, hole, shaft } = data;
//   return `size=${size}
//     &es=${hole.deviations.lowerDeviation}
//     &ei=${hole.deviations.lowerDeviation}
//     &it=${hole.deviations.lowerDeviation}
//     &ES=${shaft.deviations.lowerDeviation}
//     &EI=${shaft.deviations.lowerDeviation}
//     &IT=${shaft.deviations.lowerDeviation}`;
// };
