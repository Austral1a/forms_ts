import React, { FC, ReactElement, ReactNode } from "react";
import "./Card.scss";

interface Props {
  children: ReactNode;
}

export const Card: FC<Props> = ({ children }): ReactElement => {
  return <div className="card">{children}</div>;
};
