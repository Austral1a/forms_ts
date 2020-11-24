import React, { FC, ReactElement, ReactNode } from "react";
import classNames from "classnames";
import "./Table.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Table: FC<Props> = ({ children, className }): ReactElement => {
  const customClasses = classNames("table", className);
  return <div className={customClasses}>{children}</div>;
};
