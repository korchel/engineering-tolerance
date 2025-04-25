import Link from "next/link";
import { Table } from "../components/Table";
import { Container, Button, ButtonIcon } from "../components/ui";
import { BookIcon } from "../components/ui/icons";

export default async function Home() {
  return (
    <Container>
      <div className="columns">
        <div className="column column_wide">
          <div className="result">result here</div>
        </div>

        <div className="column ">
          <div>
            <label htmlFor="size">Номинальный размер, мм</label>
            <input type="number" id="size" />
          </div>
          <h3>вал</h3>

          <div className="grid">
            <div className="grid_justify-right">класс допуска:</div>
            <Link href={"/shaft"}>
              <ButtonIcon className="grid_justify-left" iconType="book" />
            </Link>

            <div className="grid_justify-right">верхнее отклонение:</div>
            <div className="tag grid_justify-left">data</div>
            <div className="grid_justify-right">верхнее отклонение:</div>
            <div className="tag grid_justify-left">data</div>
          </div>

          <h3>отверстие</h3>
          <div className="grid">
            <div className="grid_justify-right">класс допуска:</div>
            <Link href={"/hole"}>
              <ButtonIcon className="grid_justify-left" iconType="book" />
            </Link>
            <div className="grid_justify-right">верхнее отклонение:</div>
            <div className="tag grid_justify-left">data</div>
            <div className="grid_justify-right">верхнее отклонение:</div>
            <div className="tag grid_justify-left">data</div>
          </div>
        </div>
      </div>
    </Container>
  );
}
