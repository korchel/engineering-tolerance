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
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Широкоходовые</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th rowSpan={3}>С натягом</th>
          <th scope="row">Прессовые тяжелые</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Прессовые средние</th>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Легкопрессовые</th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
