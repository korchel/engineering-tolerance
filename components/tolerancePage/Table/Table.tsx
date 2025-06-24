"use client";

import { FC } from "react";
import clsx from "clsx";

import { toleranceNames, gradeNames } from "../../../data";
import {
  DeviationsData,
  DimensionType,
  Grade,
  InputDeviationsData,
  IToleranceData,
} from "../../../types";
import styles from "./Table.module.scss";
import { useAppStore } from "../../../store";
import { getDisabled } from "../../../lib";
import { CellButton } from "./CellButton/CellButton";

interface Props {
  type: DimensionType;
  size: number;
  activeToleranceGrade: string;
  setLocalState: (data: IToleranceData) => void;
  inputDeviations: InputDeviationsData;
  deviationsData: Array<DeviationsData[]>;
}

export const Table: FC<Props> = ({
  type,
  size,
  activeToleranceGrade,
  setLocalState,
  inputDeviations,
  deviationsData,
}) => {
  const {
    [type]: { toleranceName, grade },
  } = useAppStore((state) => state);

  const currentToleranceGrade = useAppStore(
    // TODO remove
    (state) => state[type].toleranceName + state[type].grade
  );

  const onClick = ({
    toleranceName,
    grade,
    upperDeviation,
    lowerDeviation,
  }: {
    toleranceName: string;
    grade: Grade;
    upperDeviation: number;
    lowerDeviation: number;
  }) => {
    setLocalState({
      upperDeviation,
      lowerDeviation,
      toleranceName,
      grade,
    });
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td className={styles.commonHeader}></td>
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
                {deviationsData[i].map((data, i) => {
                  const {
                    toleranceName,
                    grade,
                    isCommonIT,
                    isRecommendedIT,
                    isNotForFits,
                  } = data;
                  const toleranceGrade = toleranceName + grade;
                  const { deviations } = data;
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
                            toleranceName,
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
