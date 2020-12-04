import React, { FC, ReactElement } from "react";
import { EmployeesList, EmployeeToolbar } from "./components";
import classes from "./Employees.module.scss";

export interface EmployeeModalFormFields {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export const Employees: FC = (): ReactElement => {
  return (
    <div className={classes["employees-container"]}>
      <EmployeeToolbar />
      <EmployeesList />
    </div>
  );
};
