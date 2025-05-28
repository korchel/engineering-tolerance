"use client";

import { FC, ReactNode, RefObject, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useSectionStore } from "../../../store";
import styles from "./Section.module.css";

interface Props {
  id: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ id, children }) => {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLElement>,
    {
      threshold: 0.1,
    }
  );

  const setCurrentSection = useSectionStore((state) => state.setCurrentSection);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCurrentSection(id);
    }
  }, [intersection?.isIntersecting]);

  return (
    <section className={styles.section} id={id} ref={intersectionRef}>
      {children}
    </section>
  );
};
