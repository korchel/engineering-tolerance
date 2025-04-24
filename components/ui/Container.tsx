import { FC, PropsWithChildren } from "react";

interface Props {
  className?: string;
}

export const Container: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <div className="container">{children}</div>;
};
