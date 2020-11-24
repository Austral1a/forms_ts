import React from "react";
import { ActionsBlock } from "./index";
import { useEmployeesManagement } from "./hooks";

export const EmployeesList = () => {
  const employees = useEmployeesManagement();
  return (
    <div className="employees-body">
      {employees.map((employee) => (
        <div key={employee.id} className="employees-body__employee">
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
