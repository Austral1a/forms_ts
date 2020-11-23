import React, { FC, ReactElement, ReactNode, useEffect } from "react";
import { Employee, GetEmployee } from "../../Interfaces/Employees";
import { ActionsBlock } from "./ActionsBlock";
import { getEmployeesAction } from "../../Store/Employees";
import { useSelector } from "react-redux";

interface Props {
  employees: GetEmployee[];
}

export const EmployeesList = () => {
  useEffect(() => {
    getEmployeesAction();
  }, []);

  const employees: GetEmployee[] = useSelector(
    (state: any) => state.getEmployeesReducer.employees
  );
  return (
    <div className="card-body">
      {employees.map((employee) => (
        <div key={employee.id} className="card-body__employee">
          <h4>{employee.firstName}</h4>
          <h4>{employee.lastName}</h4>
          <h4>{employee.email}</h4>
          <h4>{employee.position}</h4>
          <ActionsBlock id={employee.id} />
          {/*TODO: RENDER ACTIONS BLOCK*/}
        </div>
      ))}
    </div>
  );
};
