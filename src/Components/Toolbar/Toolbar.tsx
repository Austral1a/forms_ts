import React, { FC, ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Toolbar: FC<Props> = ({ children }): ReactElement => {
  return <div className="toolbar">{children}</div>;
};
