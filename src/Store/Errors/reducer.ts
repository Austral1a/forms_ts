import { ERROR_OCCURRED, ErrorOccurredAction } from "./actions";
import { LoginInitState } from "./interfaces";

const loginInitState: LoginInitState = {
  errorMessage: "",
};

export const errorsReducer = (
  state = loginInitState,
  action: ErrorOccurredAction
) => {
  switch (action.type) {
    case ERROR_OCCURRED:
      const {
        payload: { errorMessage },
      } = action;
      return {
        ...state,
        errorMessage,
      };
    default:
      return state;
  }
};
