"use client";

import { FC, useState } from "react";

import { Link, usePathname, useRouter } from "../../../i18n/navigation";
import { Button } from "../../ui";
import styles from "./LanguageSwitcher.module.scss";
import clsx from "clsx";
import { useParams } from "next/navigation";

interface Props {
  className?: string;
}

export const LanguageSwitcher: FC<Props> = ({ className }) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = params;

  const [open, setOpen] = useState(false);

  const openDropDwon = () => {
    setOpen((state) => !state);
  };

  const switchLanguage = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
    }
  };

  return (
    <div className={clsx(className, styles.dropdown)}>
      <Button onClick={openDropDwon}>{locale}</Button>
      {open && (
        <div>
          <ul>
            {["ru", "en"].map((locale, i) => (
              <li key={i} className={styles[locale]}>
                <Button onClick={() => switchLanguage(locale)} variant="blank">
                  {locale}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
