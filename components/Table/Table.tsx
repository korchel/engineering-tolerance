"use client";

import { FC } from "react";
import {
  toleranceNames,
  gradeNames,
  usageSizeRanges,
  commonITs,
  recommendedITs,
  notForFitsITs,
} from "../../data";
import {
  Deviations,
  DimensionType,
  Grade,
  IToleranceData,
} from "../../types/types";

import styles from "./Table.module.css";
import clsx from "clsx";
import { useAppStore } from "../../store/store";
import { getDeviations } from "../../lib";

interface Props {
  type: DimensionType;
  size: number;
  activeToleranceGrade: string;
  setLocalState: (data: IToleranceData) => void;
}

export const Table: FC<Props> = ({
  type,
  size,
  activeToleranceGrade,
  setLocalState,
}) => {
  const currentToleranceGrade = useAppStore(
    (state) => state[type].toleranceName + state[type].grade
  );

  const usageSizeRange = usageSizeRanges.find((item) => {
    if (size >= item.range.from && size <= item.range.to) {
      return true;
    }
    return false;
  })!.type;

  const onClick = ({
    tolerance,
    grade,
    upperDeviation,
    lowerDeviation,
  }: {
    tolerance: string;
    grade: Grade;
    upperDeviation: number;
    lowerDeviation: number;
  }) => {
    setLocalState({
      upperDeviation,
      lowerDeviation,
      toleranceName: tolerance,
      grade,
    });
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={clsx(styles.commonHeader)}></td>
            {toleranceNames[type].map((tolerance, i) => {
              return (
                <th
                  key={i}
                  scope="col"
                  className={clsx(
                    styles.table__cell,
                    styles.table__cell_header,
                    styles.header
                  )}
                >
                  {tolerance}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {gradeNames.map((grade, i) => {
            return (
              <tr key={i}>
                <th scope="row" className={styles.rowHeader}>
                  <div
                    className={clsx(
                      styles.table__cell,
                      styles.table__cell_rowHeader
                    )}
                  >
                    {grade}
                  </div>
                </th>
                {toleranceNames[type].map((tolerance, i) => {
                  const toleranceGrade = tolerance + grade;
                  const isCommonIT =
                    commonITs[type][usageSizeRange].includes(toleranceGrade);
                  const isRecommendedIT =
                    recommendedITs[type][usageSizeRange].includes(
                      toleranceGrade
                    );
                  const isNotForFits =
                    notForFitsITs[type][usageSizeRange].includes(
                      toleranceGrade
                    );
                  const deviations = getDeviations(
                    size,
                    type,
                    tolerance,
                    grade
                  );

                  return deviations ? (
                    <td key={i}>
                      <button
                        onClick={() =>
                          onClick({
                            tolerance,
                            grade,
                            upperDeviation: deviations.upperDeviation,
                            lowerDeviation: deviations.lowerDeviation,
                          })
                        }
                        className={clsx(
                          styles.table__cell,
                          styles.table__cell_button,
                          {
                            [styles.normal]: !isRecommendedIT && !isCommonIT,
                            [styles.common]: isCommonIT && !isRecommendedIT,
                            [styles.recommended]: isRecommendedIT,
                            [styles.table__cell_current]:
                              toleranceGrade == currentToleranceGrade,
                            [styles.table__cell_active]:
                              toleranceGrade == activeToleranceGrade,
                          }
                        )}
                      >
                        {toleranceGrade + (isNotForFits ? "*" : "")}
                      </button>
                    </td>
                  ) : (
                    <td key={i} className={styles.table__cell}></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
