import styles from "./SideBar.module.css";

import { LinkComponent } from "../../ui";

export const SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <nav className={styles.nav}>
        <LinkComponent href="#definitions">Определения</LinkComponent>
        <LinkComponent href="#designations">Обозначения</LinkComponent>
        <LinkComponent href="#standarts">Стандарты</LinkComponent>
      </nav>
    </aside>
  );
};
