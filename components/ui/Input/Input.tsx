import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

import styles from "./Input.module.scss";

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  type?: string;
  error?: string;
}

export const Input: FC<Props> = ({
  label,
  error,
  type = "number",
  ...props
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <div className={styles.inputBlock}>
        <input className={styles.input} type={type} id={label} {...props} />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    </>
  );
};
