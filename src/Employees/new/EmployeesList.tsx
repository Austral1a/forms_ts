import React, { FC, ReactElement, ReactNode } from "react";
import { Employee } from "../../Interfaces/Employees";

interface Props {
  employees: Employee[];
}

export const EmployeesList: FC<Props> = ({ employees }): ReactElement => {
  employees.map((employee) => {
    return (
      <>
        <h4>{employee.firstName}</h4>
        <h4>{employee.lastName}</h4>
        <h4>{employee.email}</h4>
        <h4>{employee.position}</h4>
        {/*TODO: RENDER ACTIONS BLOCK*/}
      </>
    );
  });
};
