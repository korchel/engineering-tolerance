"use client";

import { FC } from "react";
import { getDeviations, toleranceNames, gradeNames } from "../../data";
import { DimensionType } from "../../types/types";
import { IState, useAppStore } from "../../store/store";
import styles from "./Table.module.css";
import clsx from "clsx";

interface Props {
  type: DimensionType;
  size: number;
}

interface IToleranceData {
  lowerDeviation: number;
  upperDeviation: number;
  toleranceGrade: string;
}

export const Table: FC<Props> = ({ type, size }) => {
  const { setDeviations, setToleranceGrade } = useAppStore((state) => state);

  const onClick = (data: IToleranceData) => {
    const { upperDeviation, lowerDeviation, toleranceGrade } = data;
    setDeviations({ upperDeviation, lowerDeviation }, type);
    setToleranceGrade(toleranceGrade, type);
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
                      styles.table__cell_header
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
