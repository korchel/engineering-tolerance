"use client";

import { FC, useState } from "react";
import { useLocale } from "next-intl";

import { Button } from "../../ui";
import styles from "./LanguageSwitcher.module.scss";
import clsx from "clsx";
import { useParams } from "next/navigation";

interface Props {
  className?: string;
}

export const LanguageSwitcher: FC<Props> = ({ className }) => {
  const params = useParams();
  const { locale } = params;

  const [open, setOpen] = useState(false);

  const openDropDwon = () => {
    setOpen((state) => !state);
  };

  return (
    <div className={clsx(className, styles.dropdown)}>
      <Button onClick={openDropDwon}>{locale}</Button>
      {open && (
        <div>
          <ul>
            {["ru", "en"].map((locale, i) => (
              <li key={i} className={styles[locale]}>
                <Button variant="blank">{locale}</Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
