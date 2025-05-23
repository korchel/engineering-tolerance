"use client";

import { useAppStore } from "../../../store/appStore";
import { ResultTable } from "./ResultTable/ResultTable";
import styles from "./Result.module.css";
import { Svg } from "./Svg/Svg";
import clsx from "clsx";

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
    <div className={clsx(styles.result, "paper")}>
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
