"use client";

import { usePathname } from "next/navigation";
import { Container, LinkComponent } from "../ui";
import styles from "./Header.module.css";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <div>LOGO</div>
        <nav className={styles.nav}>
          <LinkComponent href="/" isActive={pathname === "/"}>
            Допуски и посадки
          </LinkComponent>
          <LinkComponent href="/fit" isActive={pathname === "/fit"}>
            Подбор посадки
          </LinkComponent>
        </nav>
      </Container>
    </header>
  );
};
