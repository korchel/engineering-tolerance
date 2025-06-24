import styles from "./Spinner.module.scss";

export const Spinner = () => (
  <div className={styles.loading}>
    <span className={styles.spinner}></span>
  </div>
);
