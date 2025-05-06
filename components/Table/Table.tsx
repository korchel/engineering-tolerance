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
  }: {
    tolerance: string;
    grade: Grade;
  }) => {
    const deviations = getDeviations(size, type, tolerance, grade);
    const { upperDeviation, lowerDeviation } = deviations as Deviations;

    setLocalState({
      upperDeviation,
      lowerDeviation,
      toleranceName: tolerance,
      grade,
    });
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <td></td>
            {toleranceNames[type].map((tolerance, i) => {
              return (
                <th
                  key={i}
                  scope="col"
                  className={clsx(
                    styles.table__cell,
                    styles.table__cell_header
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
                <th scope="row">
                  <div
                    className={clsx(
                      styles.table__cell,
                      styles.table__cell_header,
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

                  return (
                    <td key={i}>
                      <button
                        onClick={() => onClick({ tolerance, grade })}
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
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
