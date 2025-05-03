"use client";

import { useAppStore } from "../../store/store";
import { ResultTable } from "./ResultTable/ResultTable";
import { Grid } from "../ui";
import styles from "./Result.module.css";
import { Svg } from "./Svg/Svg";

export const Result = () => {
  const {
    size,
    hole: {
      toleranceGrade: holeIT,
      deviations: { upperDeviation: ES, lowerDeviation: EI },
    },
    shaft: {
      toleranceGrade: shaftIT,
      deviations: { upperDeviation: es, lowerDeviation: ei },
    },
    setSize,
  } = useAppStore((state) => state);
  const svgHeight = Math.abs(ES) + Math.abs(ei) + 200;
  console.log(svgHeight);
  return (
    <div className={styles.result}>
      <Svg
        ES={ES}
        EI={EI}
        es={es}
        ei={ei}
        holeIT={holeIT}
        shaftIT={shaftIT}
        svgHeight={svgHeight}
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
  );
};
