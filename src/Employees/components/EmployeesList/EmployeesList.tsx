import React, { FC, ReactElement } from "react";
import { useEmployeesManager } from "./hooks";
import { ActionsBlock } from "./components";
import { translations } from "@helpers";
import classes from "../../Employees.module.scss";

export const EmployeesList: FC = (): ReactElement => {
  const { employeesList } = useEmployeesManager();

  const {
    field: {
      lastNameText,
      firstNameText,
      emailText,
      positionText,
      actionsText,
    },
  } = translations;

  return (
    <div className={classes["employees-container__body"]}>
      <div className={classes["employees-container__body-header"]}>
        <h4>{firstNameText}</h4>
        <h4>{lastNameText}</h4>
        <h4>{emailText}</h4>
        <h4>{positionText}</h4>
        <h4>{actionsText}</h4>
      </div>
      {employeesList.map((employee) => {
        return (
          <div
            key={employee.id}
            className={classes["employees-container__body-employee"]}
          >
            <h4>{employee.firstName}</h4>
            <h4>{employee.lastName}</h4>
            <h4>{employee.email}</h4>
            <h4>{employee.position}</h4>
            <ActionsBlock employeeValues={employee} />
          </div>
        );
      })}
    </div>
  );
};
