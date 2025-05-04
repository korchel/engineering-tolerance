import styles from "./Spinner.module.css";

export const Spinner = () => (
  <div className={styles.loading}>
    <span className={styles.spinner}></span>
  </div>
);
