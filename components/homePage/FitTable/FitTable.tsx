import styles from "./FitTable.module.css";

export const FitTable = () => {
  return (
    <table className={styles.fitTable}>
      <thead>
        <tr>
          <th>Тип посадки</th>
          <th>Описание</th>
          <th>Посадки в системе отверстия</th>
          <th>Посадки в системе вала</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={5} scope="row">
            С зазором
          </th>
          <th scope="row">Скользящие</th>
          <td colSpan={2}>
            H6/h5, H7/h6, H8/h7, H8/h8, H9/h8, H10/h9, H11/h10
          </td>
        </tr>
        <tr>
          <th scope="row">Движения</th>
          <td>H6/g5, H7/g6</td>
          <td>G6/h5, G7/h6</td>
        </tr>
        <tr>
          <th scope="row">Ходовые</th>
          <td>H7/f6, H8/f7, H8/f8, H9/f8</td>
          <td>F7/h6, F8/h7, F9/h8, F8/h9, F9/h9</td>
        </tr>
        <tr>
          <th scope="row">Легкоходовые</th>
          <td>H8/e7, H8/e8, H9/e8, H10/e9</td>
          <td>E8/h7, E9/h8, E8/h9, E9/h9</td>
        </tr>
        <tr>
          <th scope="row">Широкоходовые</th>
          <td>H8/d8, H9/d8, H10/d9, H11/d10</td>
          <td>D9/h8, D9/h9, D10/H9</td>
        </tr>
        <tr>
          <th rowSpan={3}>С натягом</th>
          <th scope="row">Прессовые тяжелые</th>
          <td>H7/u6, H7/x6, H8/u7</td>
          <td>U7/h6, X7/h6</td>
        </tr>
        <tr>
          <th scope="row">Прессовые средние</th>
          <td>H7/r6, H7/s6, H7/t6, H8/s7</td>
          <td>R7/h7, S7/h7, T7/h7</td>
        </tr>
        <tr>
          <th scope="row">Легкопрессовые</th>
          <td>H6/p5, H7/p6</td>
          <td>P6/h5, P7/h6</td>
        </tr>
        <tr>
          <th rowSpan={4}>Переходные</th>
          <th scope="row">Плотные</th>
          <td></td>
          <td></td>
        </tr>{" "}
        <tr>
          <th scope="row">Напряженные</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Тугие</th>
          <td>H6/m5, H7/m6, H8/m7</td>
          <td>M6/h5, M7/h6</td>
        </tr>
        <tr>
          <th scope="row">Глухие</th>
          <td>H7/n6</td>
          <td>N7/h6</td>
        </tr>
      </tbody>
    </table>
  );
};
