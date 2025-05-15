import Link from "next/link";
import { FC, ReactNode } from "react";

import styles from "./LinkComponent.module.css";
import clsx from "clsx";

interface Props {
  href: string;
  isActive?: boolean;
  children: ReactNode;
}

export const LinkComponent: FC<Props> = ({
  href,
  isActive = false,
  children,
}) => {
  return (
    <Link
      href={href}
      className={clsx(styles.link, { [styles.active]: isActive })}
    >
      {children}
    </Link>
  );
};
