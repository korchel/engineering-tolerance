"use client";

import styles from "./SideBar.module.css";

import { LinkComponent } from "../../ui";
import { homePageSections } from "../../../lib";
import { useSectionStore } from "../../../store";

export const SideBar = () => {
  const currentSection = useSectionStore((state) => state.currentSection);

  return (
    <aside className={styles.sideBar}>
      <nav className={styles.nav}>
        <LinkComponent
          href={`#${homePageSections.deviations}`}
          isActive={currentSection === homePageSections.deviations}
        >
          Допуски
        </LinkComponent>
        <LinkComponent
          href={`#${homePageSections.fits}`}
          isActive={currentSection === homePageSections.fits}
        >
          Посадки
        </LinkComponent>
        <LinkComponent
          href={`#${homePageSections.standarts}`}
          isActive={currentSection === homePageSections.standarts}
        >
          Стандарты
        </LinkComponent>
      </nav>
    </aside>
  );
};
