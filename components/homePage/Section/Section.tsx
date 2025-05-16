"use client";

import { FC, ReactNode, RefObject, useEffect, useRef } from "react";
import { useIntersection } from "react-use";

interface Props {
  id: string;
  children: ReactNode;
}

export const Section: FC<Props> = ({ id, children }) => {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as RefObject<HTMLElement>,
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(id);
    }
  }, [intersection?.isIntersecting]);

  return (
    <section id={id} ref={intersectionRef}>
      {children}
    </section>
  );
};
