import { loginReducer } from "@StoreLogin";
import { employeesReducer } from "@StoreEmployees";
import { errorsReducer } from "@StoreErrors";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  employeesReducer,
  errorsReducer,
});
