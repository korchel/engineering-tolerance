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
  type?: string;
}

export const Input: FC<Props> = forwardRef(
  ({ name, label, ...props }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input className={styles.input} type="number" id={name} {...props} />
      </>
    );
  }
);
