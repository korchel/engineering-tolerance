import Link from "next/link";
import { Table } from "../components/Table/Table";
import { Container, Button, ButtonIcon } from "../components/ui";

import { Settings } from "../components/Settings/Settings";
import styles from "./page.module.css";
import { Result } from "../components/Result/Result";

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
