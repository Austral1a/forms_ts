import React, { FC, ReactElement, useEffect } from "react";
import { selectError } from "@StoreErrors";
import { useSelector } from "react-redux";
import ErrorStyles from "./ErrorHandler.module.scss";

export const ErrorHandler: FC = (): ReactElement => {
  const error = useSelector(selectError);
  useEffect(() => {}, [error]);
  return <>{error && <div className={ErrorStyles["error"]}>{error}</div>}</>;
};
