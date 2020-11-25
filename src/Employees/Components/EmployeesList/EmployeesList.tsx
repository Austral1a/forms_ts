import React from "react";
import { ActionsBlock } from "./Components";
import { useEmployeesManagement } from "./hooks";
import { translations } from "../../../helpers";

export const EmployeesList = () => {
  const employees = useEmployeesManagement();
  const {
    field: {
      lastNameHolder,
      firstNameHolder,
      emailHolder,
      positionsHolder,
      actionsHolder,
    },
  } = translations;
  return (
    <div className="employees-container__body">
      <div className="employees-container__body-header">
        <h4>{firstNameHolder}</h4>
        <h4>{lastNameHolder}</h4>
        <h4>{emailHolder}</h4>
        <h4>{positionsHolder}</h4>
        <h4>{actionsHolder}</h4>
      </div>
      {employees.map((employee) => (
        <div key={employee.id} className="employees-container__body-employee">
          <h4>{employee.firstName}</h4>
          <h4>{employee.lastName}</h4>
          <h4>{employee.email}</h4>
          <h4>{employee.position}</h4>
          <ActionsBlock employeeData={employee} />
        </div>
      ))}
    </div>
  );
};
