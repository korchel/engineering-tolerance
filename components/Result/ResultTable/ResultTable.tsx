import { DetailedHTMLProps, FC, TableHTMLAttributes } from "react";

import styles from "./ResultTable.module.css";
import clsx from "clsx";
import { getResultData } from "../../../lib";

interface Props
  extends DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  size: number;
  EI: number;
  ES: number;
  ei: number;
  es: number;
  holeIT: string;
  shaftIT: string;
}

export const ResultTable: FC<Props> = ({
  size,
  ES,
  EI,
  es,
  ei,
  holeIT,
  shaftIT,
  ...props
}) => {
  const {
    fitType,
    maxHoleSize,
    minHoleSize,
    maxShaftSize,
    minShaftSize,
    minClearance,
    maxClearance,
    minInterference,
    maxInterference,
    tolerance,
  } = getResultData({
    size,
    ES,
    EI,
    es,
    ei,
  });

  const data = [
    { header: "Тип посадки:", value: fitType },
    { header: "Номинальный размер, мм:", value: size },
    { header: "Посадка:", value: `${holeIT} / ${shaftIT}` },
    { header: "Максимальный размер отверстия, мм:", value: maxHoleSize },
    { header: "Минимальный размер отверстия, мм:", value: minHoleSize },
    { header: "Максимальный размер вала, мм:", value: maxShaftSize },
    { header: "Минимальный размер вала, мм:", value: minShaftSize },
    { header: "Наименьший зазор, мкм:", value: minClearance },
    { header: "Наибольший зазор, мкм:", value: maxClearance },
    { header: "Наименьший натяг, мкм:", value: minInterference },
    { header: "Наибольший натяг, мкм:", value: maxInterference },
    { header: "Допуск посадки, мкм:", value: tolerance },
  ];
  return (
    <table className={styles.table} {...props}>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <th className={styles.th} scope="row">
              {item.header}
            </th>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
