import { createSelector } from "reselect";
import { State, EmployeeAwareState } from "./interfaces";

export const selectEmployees = createSelector(
  (state: EmployeeAwareState) => state.employeesReducer.employees,
  (employees) => employees
);
