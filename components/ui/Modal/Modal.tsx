import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import styles from "./Modal.module.css";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  closeModal: () => void;
}

export const Modal: FC<Props> = ({ closeModal, children }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <ButtonIcon
          iconType="cross"
          onClick={closeModal}
          className={styles.closeButton}
        />
        {children}
      </div>
    </div>
  );
};
