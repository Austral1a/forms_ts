import { ERROR_OCCURRED, ErrorOccurredCommit } from "./actions";

interface InitState {
  errorMessage: string;
}
type ErrorOccurredAction = ErrorOccurredCommit;

const initState: InitState = {
  errorMessage: "",
};
export const reducer = (state = initState, action: ErrorOccurredAction) => {
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
