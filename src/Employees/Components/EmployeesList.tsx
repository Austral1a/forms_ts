import React, { useEffect } from "react";
import { Employee, GetEmployee } from "../../Interfaces/Employees";
import { ActionsBlock } from "./index";
import { getEmployeesAction } from "../../Store/Employees";
import { useDispatch, useSelector } from "react-redux";

export const EmployeesList = () => {
  const dispatch = useDispatch();

  const employees: GetEmployee[] = useSelector(
    (state: any) => state.getEmployeesReducer.employees
  );

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [dispatch]);
  return (
    <div className="card-body">
      {employees.map((employee) => (
        <div key={employee.id} className="card-body__employee">
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
