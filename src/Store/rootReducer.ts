import { loginReducer } from "@StoreLogin";
import { employeesReducer, employeePositionsReducer } from "@StoreEmployees";
import { errorsReducer } from "@StoreErrors";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  employeesReducer,
  employeePositionsReducer,
  errorsReducer,
});
