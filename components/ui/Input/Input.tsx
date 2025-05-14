import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export const Input: FC<Props> = ({ label, error, ...props }) => {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <div className={styles.inputBlock}>
        <input className={styles.input} type="number" id={label} {...props} />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </>
  );
};
