"use client";

import { useAppStore } from "../../../store/store";
import { ResultTable } from "./ResultTable/ResultTable";
import styles from "./Result.module.css";
import { Svg } from "./Svg/Svg";

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
    <div className={styles.result}>
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
    </div>
  );
};
