import { createSelector } from "reselect";
import { State } from "../Employees/interfaces";

export const selectError = createSelector(
  (state: State) => state.errorReducer.errorMessage,
  (errorMessage) => errorMessage
);
