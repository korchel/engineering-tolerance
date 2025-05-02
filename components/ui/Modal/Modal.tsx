import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import styles from "./Modal.module.css";

import { Cross } from "../icons";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  // closeModal: () => void;
}

export const Modal: FC<Props> = ({ children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
