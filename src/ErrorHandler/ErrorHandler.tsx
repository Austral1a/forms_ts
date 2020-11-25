import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ErrorHandler.scss";

export const ErrorHandler: FC = () => {
  const error = useSelector((state: any) => state.errorReducer.errorMessage);
  useEffect(() => {}, [error]);
  return <div className="error">{error}</div>;
};
