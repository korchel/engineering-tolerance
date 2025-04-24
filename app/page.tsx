import { Table } from "../components/Table";
import { Container, Button } from "../components/ui";

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
            <input id="size" />
          </div>
          <h3>вал</h3>

          <div className="grid">
            <div>Выберите класс допуска:</div>
            <Button variant="primary">IT</Button>
            <div>верхнее отклонение:</div>
            <div className="tag">data</div>
            <div>верхнее отклонение:</div>
            <div className="tag">data</div>
          </div>

          <h3>отверстие</h3>
          <div className="grid">
            <div>Выберите класс допуска:</div>
            <Button variant="primary">IT</Button>
            <div>верхнее отклонение:</div>
            <div className="tag">data</div>
            <div>верхнее отклонение:</div>
            <div className="tag">data</div>
          </div>
        </div>
      </div>
      {/* <Table type="hole" size={12} /> */}
    </Container>
  );
}
