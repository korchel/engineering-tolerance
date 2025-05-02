"use client";

import { FC } from "react";
import { getDeviations, toleranceNames, gradeNames } from "../../data";
import { DimensionType, IToleranceData } from "../../types/types";

import styles from "./Table.module.css";
import clsx from "clsx";

interface Props {
  type: DimensionType;
  size: number;
  setLocalState: (data: IToleranceData) => void;
}

export const Table: FC<Props> = ({ type, size, setLocalState }) => {
  const onClick = (data: IToleranceData) => {
    const { upperDeviation, lowerDeviation, toleranceGrade } = data;
    setLocalState({ upperDeviation, lowerDeviation, toleranceGrade });
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
                  const deviations = getDeviations(
                    size,
                    type,
                    tolerance,
                    grade
                  );
                  const toleranceGrade = tolerance + grade;
                  return (
                    <td key={i}>
                      {deviations ? (
                        <button
                          onClick={() =>
                            onClick({ ...deviations, toleranceGrade })
                          }
                          className={clsx(
                            styles.table__cell,
                            styles.table__cell_button
                          )}
                        >
                          {toleranceGrade}
                        </button>
                      ) : (
                        <div className={styles.table__cell}></div>
                      )}
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
