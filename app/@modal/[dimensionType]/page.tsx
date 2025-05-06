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
    setToleranceGrade,
  } = useAppStore((state) => state);

  const IT = toleranceName + grade;
  const [localState, setLocalState] = useState({
    upperDeviation,
    lowerDeviation,
    toleranceGrade: IT,
  });

  const apply = (data: IToleranceData) => {
    const { upperDeviation, lowerDeviation, toleranceGrade } = data;
    setDeviations({ upperDeviation, lowerDeviation }, dimensionType);
    setToleranceGrade(toleranceGrade, dimensionType);
    router.back();
  };

  return (
    <Modal>
      <Title level="h2">Класс допуска</Title>
      <TableInfo size={size} data={localState} />
      <Table
        size={25}
        type={dimensionType}
        setLocalState={setLocalState}
        activeToleranceGrade={localState.toleranceGrade}
      />
      <div className={styles.buttonGroup}>
        <Button variant="outline" onClick={() => router.back()}>
          Отмена
        </Button>
        <Button variant="primary" onClick={() => apply(localState)}>
          Применить
        </Button>
      </div>
    </Modal>
  );
}
