"use client";

import { Usable, use, useState } from "react";
import { Table } from "../../../components/Table/Table";
import { TableInfo } from "../../../components/TableInfo/TableInfo";
import { Button, Modal, Title } from "../../../components/ui";
import { DimensionType, IToleranceData } from "../../../types/types";
import { useAppStore } from "../../../store/store";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page({
  params,
}: {
  params: { dimensionType: DimensionType };
}) {
  const { dimensionType } = use(
    params as unknown as Usable<{ dimensionType: DimensionType }>
  );
  const router = useRouter();

  const {
    size,
    [dimensionType]: {
      toleranceName,
      grade,
      deviations: { upperDeviation, lowerDeviation },
    },
    setDeviations,
    setToleranceName,
    setGrade,
  } = useAppStore((state) => state);

  const [localState, setLocalState] = useState<IToleranceData>({
    upperDeviation,
    lowerDeviation,
    toleranceName,
    grade,
  });

  const apply = (data: IToleranceData) => {
    const { upperDeviation, lowerDeviation, toleranceName, grade } = data;
    setDeviations({ upperDeviation, lowerDeviation }, dimensionType);
    setToleranceName(toleranceName, dimensionType);
    setGrade(grade, dimensionType);
    router.back();
  };

  const localToleranceGrade = localState.toleranceName + localState.grade;

  return (
    <Modal>
      <Title className={styles.mb1} level="h2">
        Класс допуска
      </Title>
      <TableInfo size={size} data={localState} />
      <Table
        size={25}
        type={dimensionType}
        setLocalState={setLocalState}
        activeToleranceGrade={localToleranceGrade}
      />
      <div className={styles.buttonGroup}>
        <Button variant="outline" onClick={() => router.back()}>
          Отмена
        </Button>
        <Button
          disabled={localToleranceGrade === toleranceName + grade}
          variant="primary"
          onClick={() => apply(localState)}
        >
          Применить
        </Button>
      </div>
    </Modal>
  );
}
