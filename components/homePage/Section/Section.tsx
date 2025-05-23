"use client";

import { FC, ReactNode, RefObject, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useSectionStore } from "../../../store";

interface Props {
  id: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ id, children }) => {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLElement>,
    {
      threshold: 0.5,
    }
  );

  const setCurrentSection = useSectionStore((state) => state.setCurrentSection);

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCurrentSection(id);
      console.log(id);
    }
  }, [intersection?.isIntersecting]);

  return (
    <section id={id} ref={intersectionRef}>
      {children}
    </section>
  );
};
