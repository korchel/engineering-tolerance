"use client";

import { FC, useEffect, useState } from "react";
import { useRouter, notFound } from "next/navigation";

import styles from "./TolerancePickModal.module.css";
import {
  DeviationsData,
  DimensionType,
  InputDeviationsData,
  IToleranceData,
} from "../../../types";
import { useAppStore } from "../../../store";
import { Button, Modal, Title } from "../../ui";
import { TableInfo } from "../TableInfo/TableInfo";
import { Table } from "../Table/Table";

interface Props {
  dimensionType: DimensionType;
  deviationsData: Array<DeviationsData[]>; //TODO
}

export const TolerancePickModal: FC<Props> = ({
  dimensionType,
  deviationsData,
}) => {
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
          size={size}
          type={dimensionType}
          setLocalState={setLocalState}
          activeToleranceGrade={localToleranceGrade}
          inputDeviations={inputDeviations}
          deviationsData={deviationsData}
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
};
