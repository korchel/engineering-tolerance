import { FC } from "react";

import styles from "./Svg.module.css";

interface Props {
  EI: number;
  ES: number;
  ei: number;
  es: number;
  holeIT: string;
  shaftIT: string;
  svgHeight: number;
}

export const Svg: FC<Props> = ({
  EI,
  ES,
  ei,
  es,
  holeIT,
  shaftIT,
  svgHeight,
}) => {
  return (
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
            <text x="335" y={-ei + 25} fontSize="25">
              {shaftIT}
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};
