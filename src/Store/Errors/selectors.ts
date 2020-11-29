import { createSelector } from "reselect";
import { State } from "@StoreEmployees";

export const selectError = createSelector(
  (state: State) => state.errorsReducer.errorMessage,
  (errorMessage) => errorMessage
);
