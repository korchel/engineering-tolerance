import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Paragraph.module.css";

interface Props
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {}

export const Paragraph: FC<Props> = ({ children }) => {
  return <p className={styles.paragraph}>{children}</p>;
};
