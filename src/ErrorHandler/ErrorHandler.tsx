import React, { FC, ReactElement, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectError } from "@StoreErrors";
import "./ErrorHandler.scss";

export const ErrorHandler: FC = (): ReactElement => {
  const error = useSelector(selectError);
  useEffect(() => {}, [error]);
  return <>{error && <div className="error">{error}</div>}</>;
};
