import { DetailedHTMLProps, FC, TableHTMLAttributes } from "react";

import styles from "./ResultTable.module.css";

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
  const data = [
    { header: "Номинальный размер, мм:", value: size },
    { header: "Посадка:", value: `${holeIT} / ${shaftIT}` },
    { header: "Максимальный размер отверстия, мм:", value: size + ES },
    { header: "Минимальный размер отверстия, мм:", value: size - ES },
    { header: "Максимальный размер вала, мм:", value: size + es },
    { header: "Минимальный размер вала, мм:", value: size - ei },
    { header: "Наибольший зазор, мкм:", value: "data" },
    { header: "Наименьший зазор, мкм:", value: "data" },
    { header: "Наибольший натяг, мкм:", value: "data" },
    { header: "Наименьший натяг, мкм:", value: "data" },
    { header: "Допуск посадки, мм:", value: "data" },
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
