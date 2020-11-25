import React, { FC, ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ErrorHandler.scss";
import { selectError } from "../Store/Errors";

export const ErrorHandler: FC = (): ReactElement => {
  const error = useSelector(selectError);
  useEffect(() => {}, [error]);
  return <>{error && <div className="error">{error}</div>}</>;
};
