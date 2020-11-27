import { createSelector } from "reselect";
import { State } from "@StoreEmployees";

export const selectError = createSelector(
  (state: State) => state.errorReducer.errorMessage,
  (errorMessage) => errorMessage
);
