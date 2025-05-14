"use client";

import { FC } from "react";
import clsx from "clsx";

import {
  toleranceNames,
  gradeNames,
  usageSizeRanges,
  commonITs,
  recommendedITs,
  notForFitsITs,
} from "../../../data";
import {
  Deviations,
  DimensionType,
  Grade,
  InputDeviationsData,
  IToleranceData,
} from "../../../types";
import styles from "./Table.module.css";
import { useAppStore } from "../../../store";
import { getDeviations, getDisabled } from "../../../lib";
import { CellButton } from "./CellButton/CellButton";

interface Props {
  type: DimensionType;
  size: number;
  activeToleranceGrade: string;
  setLocalState: (data: IToleranceData) => void;
  inputDeviations: InputDeviationsData;
}

export const Table: FC<Props> = ({
  type,
  size,
  activeToleranceGrade,
  setLocalState,
  inputDeviations,
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
    <div className={styles.tableContainer}>
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
                  const isDisabled = getDisabled(deviations, inputDeviations);
                  return deviations ? (
                    <td key={i}>
                      <CellButton
                        isCommonIT={isCommonIT}
                        isRecommendedIT={isRecommendedIT}
                        isActive={toleranceGrade === activeToleranceGrade}
                        isCurrent={toleranceGrade === currentToleranceGrade}
                        isDisabled={isDisabled}
                        className={styles.table__cell}
                        onClick={() =>
                          onClick({
                            tolerance,
                            grade,
                            upperDeviation: deviations.upperDeviation,
                            lowerDeviation: deviations.lowerDeviation,
                          })
                        }
                      >
                        {toleranceGrade + (isNotForFits ? "*" : "")}
                      </CellButton>
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
