import { createSelector } from "reselect";
import { EmployeeAwareState } from "./interfaces";

export const selectEmployees = createSelector(
  (state: EmployeeAwareState) => state.employeesReducer.employees,
  (employees) => employees
);

export const selectEmployeePositions = createSelector(
  (state: EmployeeAwareState) => state.employeesReducer.employeePositions,
  (employeePositions) => employeePositions
);
