import { FC } from "react";
import { gradeNames } from "../data/gradeNames";
import { toleranceNames } from "../data/toleranceNames";
import { getDeviations } from "../data/getDeviations";

interface Props {
  type: "hole" | "shaft";
  size: number;
}

export const Table: FC<Props> = ({ type, size }) => {
  console.log(getDeviations(size, type, "K", 10));
  return (
    <>
      <h2>Класс допуска</h2>
      <div className="columns">
        <div>
          <h3>Подбор допуска</h3>
          <div className="grid">
            <label htmlFor="upperDeviation">Верхнее отклонение:</label>
            <input id="upperDeviation" />
            <label htmlFor="lowerDeviation">Нижнее отклонение:</label>
            <input id="lowerDeviation" />
          </div>
        </div>
        <div className="grid">
          <div>Номинальный размер:</div>
          <div className="tag">{size}</div>
          <div>Класс:</div>
          <div className="tag"></div>
          <div>Верхнее отклонение:</div>
          <div className="tag"></div>
          <div>Нижнее отклонение:</div>
          <div className="tag"></div>
        </div>
      </div>

      <table className="table">
        <tr>
          <td></td>
          {toleranceNames[type].map((tolerance) => {
            return (
              <th scope="col" className="table__cell table__cell_header">
                {tolerance}
              </th>
            );
          })}
        </tr>
        {gradeNames.map((grade) => {
          return (
            <tr>
              {" "}
              <th className="table__cell table__cell_header" scope="row">
                {grade}
              </th>
              {toleranceNames[type].map((tolerance) => {
                return (
                  <td>
                    {getDeviations(size, type, tolerance, grade) ? (
                      <button className="table__cell table__cell_button">
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
      </table>
    </>
  );
};
