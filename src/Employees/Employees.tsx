import React, { FC } from "react";
import { EmployeesList, EmployeeToolbar } from "./Components";
import "./Employees.scss";

export const Employees: FC = () => {
  return (
    <>
      <div className="employees-container">
        <EmployeeToolbar />
        <EmployeesList />
      </div>
    </>
  );
};
