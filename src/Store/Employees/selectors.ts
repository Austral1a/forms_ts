import { createSelector } from "reselect";
import { EmployeesAwareState } from "./interfaces";

export const selectEmployees = createSelector(
  (state: EmployeesAwareState) => state.employeesReducer.employees,
  (employees) => employees
);
