import { reducer as loginReducer } from "@StoreLogin";
import { employeesReducer } from "@StoreEmployees";
import { reducer as errorReducer } from "@StoreErrors";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
  employeesReducer,
  errorReducer,
});
