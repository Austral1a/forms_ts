import { reducer as loginReducer } from "./Login";
import { employeesReducer } from "./Employees";
import { reducer as errorReducer } from "./Errors";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  employeesReducer,
  errorReducer,
});
