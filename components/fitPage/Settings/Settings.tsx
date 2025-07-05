"use client";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import styles from "./Settings.module.scss";
import { useAppStore } from "../../../store";
import { Setting } from "./Setting/Setting";
import { Button, Grid, Tag } from "../../ui";
import { createPDF } from "../../../lib";
import { FormInput } from "../../form/FormInput/FormInput";
import clsx from "clsx";

const sizeSchema = z.object({
  size: z.coerce
    .number()
    .min(1, { message: "минимум 1" })
    .max(500, { message: "максимум 500" }),
});

export const Settings = ({ className }: { className?: string }) => {
  const {
    setSize,
    shaft: { toleranceName: shaftTolerance, grade: shaftGrade },
    hole: { toleranceName: holeTolerance, grade: holeGrade },
  } = useAppStore((state) => state);

  const form = useForm<z.infer<typeof sizeSchema>>({
    resolver: zodResolver(sizeSchema),
    defaultValues: { size: 40 },
  });

  const shaftIT = shaftTolerance + shaftGrade;
  const holeIT = holeTolerance + holeGrade;

  const changeSize: SubmitHandler<z.infer<typeof sizeSchema>> = async (
    data
  ) => {
    const { size } = data;
    setSize(size, holeTolerance, holeGrade, shaftTolerance, shaftGrade);
  };

  return (
    <div className={clsx(styles.settings, className)}>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(changeSize)}>
          <Grid>
            <FormInput name={"size"} />
            <Button className={styles.grid__span2} type="submit">
              Пересчитать
            </Button>
          </Grid>
        </form>
      </FormProvider>

      <Grid>
        <div>Посадка:</div>
        <Tag>
          {holeIT} / {shaftIT}
        </Tag>
        <Setting type="hole" />
        <Setting type="shaft" />
        <Button
          onClick={() => createPDF(`${holeIT}${shaftIT}`)}
          variant="primary"
          className={styles.grid__span2}
        >
          Сохранить схему
        </Button>
      </Grid>
    </div>
  );
};
