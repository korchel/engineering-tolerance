import { Table } from "../../../components/Table/Table";
import { TableInfo } from "../../../components/TableInfo/TableInfo";
import { Modal } from "../../../components/ui";
import { Deviations, DimensionType } from "../../../types/types";

export default async function Page({
  params,
}: {
  params: { dimensionType: DimensionType };
}) {
  const { dimensionType } = await params;
  return (
    <Modal>
      <h2>Класс допуска</h2>
      <TableInfo type={dimensionType} />
      <Table size={25} type={dimensionType} />
    </Modal>
  );
}
