import {
  DetailedHTMLProps,
  FC,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import styles from "./Input.module.css";

export interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  label: string;
  error: string;
  type?: string;
}

export const Input: FC<Props> = forwardRef(
  ({ name, label, error, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <div className={styles.inputBlock}>
          <input className={styles.input} type="number" id={name} {...props} />
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </>
    );
  }
);
