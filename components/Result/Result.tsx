"use client";

import { useAppStore } from "../../store/store";
import styles from "./Result.module.css";

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

  const svgHeight = 600;
  const blockWidth = 100;
  return (
    <div className={styles.result}>
      <svg
        width="500"
        height={svgHeight}
        viewBox={`0 0 500 ${svgHeight}`}
        className={styles.svg}
      >
        <g transform="scale(1,-1)">
          <line
            x1="0"
            y1={`${-svgHeight / 2}`}
            x2="500"
            y2={`${-svgHeight / 2}`}
            stroke="gray"
            strokeWidth="1"
          />
          <g transform={`translate(0 ${-svgHeight / 2})`}>
            <rect
              x="100"
              y={`${EI}`}
              height={`${ES - EI}`}
              width="100"
              className={styles.rect}
            />
            <g className={styles.text}>
              <text x="205" y={-ES}>
                {ES}
              </text>
              <text x="205" y={-EI + 10}>
                {EI}
              </text>
              <text x="135" y={-EI + 25} fontSize="25">
                {holeIT}
              </text>
            </g>
            <rect
              x="300"
              y={`${ei}`}
              height={`${es - ei}`}
              width="100"
              className={styles.rect}
            />
            <g className={styles.text}>
              <text x="405" y={-es}>
                {es}
              </text>
              <text x="405" y={-ei + 10}>
                {ei}
              </text>
              <text x="335" y={-ei + 25} font-size="25">
                {shaftIT}
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};
