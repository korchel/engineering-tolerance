"use client";

import styles from "./SideBar.module.scss";
import { LinkComponent } from "../../ui";
import { useSectionStore } from "../../../store";
import { FC } from "react";

interface Props {
  sections: { text: string; href: string }[];
}

export const SideBar: FC<Props> = ({ sections }) => {
  const currentSection = useSectionStore((state) => state.currentSection);

  return (
    <aside className={styles.sideBar}>
      <nav>
        {sections.map((section, i) => (
          <LinkComponent
            key={i}
            href={`#${section.href}`}
            isActive={currentSection === section.href}
          >
            {section.text}
          </LinkComponent>
        ))}
      </nav>
    </aside>
  );
};
