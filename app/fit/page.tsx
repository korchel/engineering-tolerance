import { Container } from "../../components/ui";
import { Settings, Result } from "../../components";

export default async function Home() {
  return (
    <Container>
      <div className="columns">
        <div className="column_wide">
          <Result />
        </div>

        <div>
          <Settings />
        </div>
      </div>
    </Container>
  );
}
