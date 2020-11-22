import { reducer as loginReducer } from "./Login";
import { reducer as getEmployeesReducer } from "./Employees";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  getEmployeesReducer,
});
