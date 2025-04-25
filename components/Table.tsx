"use client";

import { FC } from "react";
import { getDeviations, toleranceNames, gradeNames } from "../data";
import { Deviations, DimensionType } from "../types/types";

interface Props {
  type: DimensionType;
  size: number;
  setDeviations: (deviaions: Deviations) => void;
}

export const Table: FC<Props> = ({ type, size, setDeviations }) => {
  console.log("table");

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <td></td>
            {toleranceNames[type].map((tolerance, i) => {
              return (
                <th
                  key={i}
                  scope="col"
                  className="table__cell table__cell_header"
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
                  <div className="table__cell table__cell_header">{grade}</div>
                </th>
                {toleranceNames[type].map((tolerance, i) => {
                  const deviations = getDeviations(
                    size,
                    type,
                    tolerance,
                    grade
                  );
                  return (
                    <td key={i}>
                      {deviations ? (
                        <button
                          onClick={() => setDeviations(deviations)}
                          className="table__cell table__cell_button"
                        >
                          {tolerance + grade}
                        </button>
                      ) : (
                        <div className="table__cell"></div>
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
