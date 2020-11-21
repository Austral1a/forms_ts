import { LOGIN_FAIL, LOGIN_SUCCESS } from "./index";

interface Payload {
  isLogged: boolean;
  email: string;
  password: string;
  errorMessage: string;
}

interface Action {
  type: string;
  payload: Payload;
}

const initState: Payload = {
  isLogged: false,
  email: "",
  password: "",
  errorMessage: "",
};

export const reducer = (state = initState, action: Action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const {
        payload: { email, password },
      } = action;
      return {
        ...state,
        isLogged: true,
        email,
        password,
      };
    case LOGIN_FAIL:
      const {
        payload: { errorMessage },
      } = action;
      return {
        ...state,
        isLogged: false,
        errorMessage,
      };
    default:
      return state;
  }
};
