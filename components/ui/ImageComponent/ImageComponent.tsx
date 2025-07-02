import Image from "next/image";
import { FC } from "react";

import styles from "./ImageComponent.module.scss";

interface Props {
  src: string;
  alt: string;
}

export const ImageComponent: FC<Props> = ({ src, alt }) => (
  <div className={styles.image}>
    <Image src={src} alt={alt} fill />
  </div>
);
