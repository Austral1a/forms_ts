import { createSelector } from "reselect";
import { EmployeeAwareState, EmployeePositionsAwareState } from "./interfaces";
export const selectEmployees = createSelector(
  (state: EmployeeAwareState) => state.employeesReducer.employees,
  (employees) => employees
);

export const selectEmployeePositions = createSelector(
  (state: EmployeePositionsAwareState) =>
    state.employeePositionsReducer.employee_positions,
  (employee_positions) => employee_positions
);
