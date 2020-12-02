import React, { FC, ReactElement } from "react";
import { EmployeesList, EmployeeToolbar } from "./components";
import EmployeesStyles from "./Employees.module.scss";

export interface EmployeeModalFormFields {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export const Employees: FC = (): ReactElement => {
  return (
    <div className={EmployeesStyles["employees-container"]}>
      <EmployeeToolbar />
      <EmployeesList />
    </div>
  );
};
