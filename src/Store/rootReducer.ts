import { reducer as loginReducer } from "./Login";
import { reducer as getEmployeesReducer, getEmployeeReducer } from "./Employees";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  getEmployeesReducer,
  getEmployeeReducer
});
