"use client";

import { useAppStore } from "../../../store/appStore";
import { ResultTable } from "./ResultTable/ResultTable";
import styles from "./Result.module.scss";
import { Svg } from "./Svg/Svg";
import { Paper } from "../../ui";

export const Result = () => {
  const {
    size,
    hole: {
      toleranceName: holeTolerance,
      grade: holeGrade,
      deviations: { upperDeviation: ES, lowerDeviation: EI },
    },
    shaft: {
      toleranceName: shaftTolerance,
      grade: shaftGrade,
      deviations: { upperDeviation: es, lowerDeviation: ei },
    },
  } = useAppStore((state) => state);

  const shaftIT = shaftTolerance + shaftGrade;
  const holeIT = holeTolerance + holeGrade;

  return (
    <Paper className={styles.result}>
      <div id="result" className={styles.pdf}>
        <Svg
          ES={ES}
          EI={EI}
          es={es}
          ei={ei}
          holeIT={holeIT}
          shaftIT={shaftIT}
        />
        <ResultTable
          className={styles.table}
          ES={ES}
          EI={EI}
          es={es}
          ei={ei}
          holeIT={holeIT}
          shaftIT={shaftIT}
          size={size}
        />
      </div>
    </Paper>
  );
};
