"use client";

import { ChangeEventHandler, useEffect } from "react";
import { IState, useAppStore } from "../../store/store";
import { Setting } from "./Setting/Setting";
import { Grid, Tag } from "../ui";
import { Input } from "../ui/Input/Input";

export const Settings = () => {
  const {
    size,
    shaft: { toleranceGrade: shaftIT },
    hole: { toleranceGrade: holeIT },
    setSize,
  } = useAppStore((state) => state);

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSize(Number(event.target.value));
  };

  return (
    <Grid>
      <Input
        name={"size"}
        label={"Номинальный размер, мм:"}
        onChange={(e) => onChange(e)}
        value={size}
      />
      <div>Посадка:</div>
      <Tag>
        {holeIT} / {shaftIT}{" "}
      </Tag>
      <Setting type="shaft" />
      <Setting type="hole" />
    </Grid>
  );
};

// const getQuery = (data: Pick<IState, "hole" | "shaft" | "size">) => {
//   const { size, hole, shaft } = data;
//   return `size=${size}
//     &es=${hole.deviations.lowerDeviation}
//     &ei=${hole.deviations.lowerDeviation}
//     &it=${hole.deviations.lowerDeviation}
//     &ES=${shaft.deviations.lowerDeviation}
//     &EI=${shaft.deviations.lowerDeviation}
//     &IT=${shaft.deviations.lowerDeviation}`;
// };
