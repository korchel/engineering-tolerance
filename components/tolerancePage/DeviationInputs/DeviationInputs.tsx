"use client";

import { FC } from "react";
import { InputDeviationsData } from "../../../types/fitTypes";
import { Button, Grid, Input, Title } from "../../ui";
import styles from "./DeviationInputs.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  setInputDeviations: (data: InputDeviationsData) => void;
}

interface Inputs {
  upperDeviation: number;
  lowerDeviation: number;
}

export const DeviationInputs: FC<Props> = ({ setInputDeviations }) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setInputDeviations(data);
  };

  const reset = () => {
    setInputDeviations({ upperDeviation: null, lowerDeviation: null });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid>
        <Title level="h3" className={styles.title}>
          Подбор допуска
        </Title>
        <Input
          label="Верхнее отклонение:"
          {...register("upperDeviation", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <Input
          label="Нижнее отклонение:"
          {...register("lowerDeviation", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <div className={styles.buttonGroup}>
          <Button
            type="reset"
            onClick={reset}
            variant="outline"
            disabled={!isDirty || !isValid}
          >
            Сбросить
          </Button>
          <Button type="submit" disabled={!isDirty || !isValid}>
            Подобрать
          </Button>
        </div>
      </Grid>
    </form>
  );
};
