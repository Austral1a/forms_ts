import React, { FC, ReactElement } from "react";
import { EmployeesList, EmployeeToolbar } from "./components";
import "./Employees.scss";

export interface EmployeeModalFormFields {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export const Employees: FC = (): ReactElement => {
  return (
    <div className="employees-container">
      <EmployeeToolbar />
      <EmployeesList />
    </div>
  );
};
