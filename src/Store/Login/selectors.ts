import { createSelector } from "reselect";
import { LoginAwareState } from "./interfaces";

export const selectIsUserLoggedIn = createSelector(
  (state: LoginAwareState) => state.loginReducer.isLogged,
  (isLogged) => isLogged
);
