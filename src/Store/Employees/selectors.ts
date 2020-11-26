import { createSelector } from "reselect";
import { State } from "./interfaces";

export const selectEmployees = createSelector(
  (state: State) => state.employeesReducer.employees,
  (employees) => employees
);
