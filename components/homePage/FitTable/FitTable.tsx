export const FitTable = () => {
  return (
    <table>
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
          <td rowSpan={5}>С зазором</td>
          <td>Скользящие</td>
          <td colSpan={2}>
            H6/h5, H7/h6, H8/h7, H8/h8, H9/h8, H10/h9, H11/h10
          </td>
        </tr>
        <tr>
          <td>Движения</td>
          <td>H6/g5, H7/g6</td>
          <td>G6/h5, G7/h6</td>
        </tr>
        <tr>
          <td>Ходовые</td>
          <td>H7/f6, H8/f7, H8/f8, H9/f8</td>
          <td>F7/h6, F8/h7, F9/h8, F8/h9, F9/h9</td>
        </tr>
        <tr>
          <td>Легкоходовые</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Широкоходовые</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan={3}>С натягом</td>
          <td>Прессовые тяжелые</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Прессовые средние</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Легкопрессовые</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};
