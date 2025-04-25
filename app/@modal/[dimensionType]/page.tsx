"use client";

import { use } from "react";
import { Table } from "../../../components/Table";
import { ToleranceSetting } from "../../../components/ToleranceSetting";
import { Modal } from "../../../components/ui";
import { Deviations, DimensionType } from "../../../types/types";

export default function Page({
  params,
}: {
  params: { dimensionType: DimensionType };
}) {
  const setDeviations = (deviaions: Deviations) => {
    console.log(deviaions);
  };
  return (
    <Modal>
      <h2>Класс допуска</h2>
      <ToleranceSetting />
      <Table setDeviations={setDeviations} size={25} type={dimensionType} />
    </Modal>
  );
}
