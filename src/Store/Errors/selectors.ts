import { createSelector } from "reselect";
import { ErrorsWatcherAwareState } from "./interfaces";

export const selectError = createSelector(
  (state: ErrorsWatcherAwareState) => state.errorsReducer.errorMessage,
  (errorMessage) => errorMessage
);
