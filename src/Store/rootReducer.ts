import { reducer as loginReducer } from "./Login";
import { reducer as getEmployeesReducer } from "./Employees";
import { reducer as errorReducer } from "./Errors";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  getEmployeesReducer,
  errorReducer,
});
