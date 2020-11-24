import React from "react";
import { ActionsBlock } from "./Components";
import { useEmployeesManagement } from "./hooks";

export const EmployeesList = () => {
  const employees = useEmployeesManagement();
  return (
    <div className="employees-container__body">
      <div className="employees-container__body-header">
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
        <h4>Position</h4>
        <h4>Actions</h4>
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
