import { reducer as loginReducer } from "./Login";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  loginReducer,
});
