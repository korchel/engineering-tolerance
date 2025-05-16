import { FC } from "react";

import styles from "./Svg.module.css";

interface Props {
  EI: number;
  ES: number;
  ei: number;
  es: number;
  holeIT: string;
  shaftIT: string;
}

export const Svg: FC<Props> = ({ EI, ES, ei, es, holeIT, shaftIT }) => {
  const svgHeight = 350;
  const tolerance = Math.max(
    ES - ei + EI - es,
    es - EI + ei - ES,
    ES - ei + es - EI
  );
  const scalingFactor = tolerance > svgHeight ? svgHeight / (2 * tolerance) : 1;

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
            y={`${EI * scalingFactor}`}
            height={`${(ES - EI) * scalingFactor}`}
            width="100"
            className={styles.rect}
          />
          <g className={styles.text}>
            <text x="205" y={-ES * scalingFactor}>
              {ES}
            </text>
            <text x="205" y={-EI * scalingFactor + 15}>
              {EI}
            </text>
            <text x="135" y={-EI * scalingFactor + 25} fontSize="25">
              {holeIT}
            </text>
          </g>
          <rect
            x="300"
            y={`${ei * scalingFactor}`}
            height={`${(es - ei) * scalingFactor}`}
            width="100"
            className={styles.rect}
          />
          <g className={styles.text}>
            <text x="405" y={-es * scalingFactor}>
              {es}
            </text>
            <text x="405" y={-ei * scalingFactor + 15}>
              {ei}
            </text>
            <text x="335" y={-ei * scalingFactor + 25} fontSize="25">
              {shaftIT}
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
};
