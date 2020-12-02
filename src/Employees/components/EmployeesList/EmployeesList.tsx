import React, { FC, ReactElement } from "react";
import { useEmployeesManager } from "./hooks";
import { ActionsBlock } from "./components";
import { translations } from "@helpers";
import EmployeesStyles from "../../Employees.module.scss";

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
    <div className={EmployeesStyles["employees-container__body"]}>
      <div className={EmployeesStyles["employees-container__body-header"]}>
        <h4>{firstNameText}</h4>
        <h4>{lastNameText}</h4>
        <h4>{emailText}</h4>
        <h4>{positionText}</h4>
        <h4>{actionsText}</h4>
      </div>
      {employeesList.map((employee) => {
        const { firstName, lastName, email, position, id } = employee;
        return (
          <div
            key={id}
            className={EmployeesStyles["employees-container__body-employee"]}
          >
            <h4>{firstName}</h4>
            <h4>{lastName}</h4>
            <h4>{email}</h4>
            <h4>{position}</h4>
            <ActionsBlock employeeValues={employee} />
          </div>
        );
      })}
    </div>
  );
};
