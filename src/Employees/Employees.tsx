import React, { FC, ReactElement } from "react";
import { EmployeesList, EmployeeToolbar } from "./Components";
import "./Employees.scss";

export const Employees: FC = (): ReactElement => {
  return (
    <div className="employees-container">
      <EmployeeToolbar />
      <EmployeesList />
    </div>
  );
};
