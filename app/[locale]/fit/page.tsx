import { Container } from "../../../components/ui";
import { Settings, Result } from "../../../components";

import styles from "./page.module.css";

export default async function Home() {
  return (
    <Container>
      <div className={styles.columns}>
        <div className={styles.column_wide}>
          <Result />
        </div>

        <div>
          <Settings />
        </div>
      </div>
    </Container>
  );
}
