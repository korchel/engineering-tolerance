import { FC, ReactNode } from "react";

interface Props {}

export const ToleranceSetting: FC<Props> = ({}) => {
  return (
    <div>
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
          <div className="tag">size</div>
          <div>Класс:</div>
          <div className="tag"></div>
          <div>Верхнее отклонение:</div>
          <div className="tag"></div>
          <div>Нижнее отклонение:</div>
          <div className="tag"></div>
        </div>
      </div>
    </div>
  );
};
