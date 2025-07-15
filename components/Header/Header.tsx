"use client";

import { usePathname } from "next/navigation";
import { ButtonIcon, Container, LinkComponent } from "../ui";
import styles from "./Header.module.scss";
import { Logo } from "./Logo/Logo";
import { useState } from "react";
import clsx from "clsx";
import { LanguageSwitcher } from "../homePage/LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((state) => !state);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Logo />

        <nav className={clsx(styles.nav, { [styles.nav_visible]: isMenuOpen })}>
          <LinkComponent href="/" isActive={!pathname.includes("/fit")}>
            Допуски и посадки
          </LinkComponent>
          <LinkComponent href="/fit" isActive={pathname.includes("/fit")}>
            Подбор посадки
          </LinkComponent>
        </nav>
        <ButtonIcon
          onClick={toggleMenu}
          className={styles.menuButton}
          iconType={isMenuOpen ? "cross" : "menu"}
        />
        <LanguageSwitcher className={styles.ml} />
      </Container>
    </header>
  );
};
