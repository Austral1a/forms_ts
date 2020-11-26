import React, { FC, ReactElement } from "react";
import { ActionsBlock } from "./Components";
import { useEmployeesManager } from "./hooks";
import { translations } from "../../../helpers";

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
    <div className="employees-list">
      <div className="employees-list__header">
        <h4>{firstNameText}</h4>
        <h4>{lastNameText}</h4>
        <h4>{emailText}</h4>
        <h4>{positionText}</h4>
        <h4>{actionsText}</h4>
      </div>
      {employeesList.map((employee) => (
        <div key={employee.id} className="employees-list__item">
          <h4>{employee.firstName}</h4>
          <h4>{employee.lastName}</h4>
          <h4>{employee.email}</h4>
          <h4>{employee.position}</h4>
          <ActionsBlock employeeValues={employee} />
        </div>
      ))}
    </div>
  );
};
