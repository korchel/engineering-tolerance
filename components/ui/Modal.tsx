import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

import { Cross } from "./icons";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {
  // closeModal: () => void;
}

export const Modal: FC<Props> = ({ children }) => {
  return <div className="modal">{children}</div>;
};
