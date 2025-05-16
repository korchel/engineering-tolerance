"use client";

import styles from "./Settings.module.css";
import { useAppStore } from "../../../store";
import { Setting } from "./Setting/Setting";
import { Button, Grid, Tag } from "../../ui";
import { createPDF } from "../../../lib";
import { SizeInput } from "./SizeInput/SizeInput";

export const Settings = () => {
  const {
    shaft: { toleranceName: shaftTolerance, grade: shaftGrade },
    hole: { toleranceName: holeTolerance, grade: holeGrade },
  } = useAppStore((state) => state);

  const shaftIT = shaftTolerance + shaftGrade;
  const holeIT = holeTolerance + holeGrade;

  return (
    <div className={styles.settings}>
      <Grid>
        <SizeInput />
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
