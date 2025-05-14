"use client";

import { Usable, use, useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";

import { Table, TableInfo } from "../../../../components";
import { Button, Modal, Title } from "../../../../components/ui";
import {
  DimensionType,
  InputDeviationsData,
  IToleranceData,
} from "../../../../types";
import { useAppStore } from "../../../../store";
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
  const clodeModal = () => router.back();

  if (dimensionType !== "shaft" && dimensionType !== "hole") {
    return notFound();
  }

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

  const [inputDeviations, setInputDeviations] = useState<InputDeviationsData>({
    upperDeviation: null,
    lowerDeviation: null,
  });

  const apply = (data: IToleranceData) => {
    const { upperDeviation, lowerDeviation, toleranceName, grade } = data;
    setDeviations({ upperDeviation, lowerDeviation }, dimensionType);
    setToleranceName(toleranceName, dimensionType);
    setGrade(grade, dimensionType);
    clodeModal();
  };

  const localToleranceGrade = localState.toleranceName + localState.grade;

  useEffect(() => {
    const onKedyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clodeModal();
      }
    };
    window.addEventListener("keydown", onKedyDown);
    return () => window.removeEventListener("keydown", (e) => onKedyDown(e));
  }, []);

  return (
    <Modal closeModal={clodeModal}>
      <div className={styles.flex}>
        <Title level="h2">Класс допуска</Title>
        <TableInfo
          size={size}
          data={localState}
          setInputDeviations={setInputDeviations}
        />
        <Table
          size={25}
          type={dimensionType}
          setLocalState={setLocalState}
          activeToleranceGrade={localToleranceGrade}
          inputDeviations={inputDeviations}
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
      </div>
    </Modal>
  );
}
