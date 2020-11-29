import { LoginActionTypes, LoginState } from "./index";

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

export const loginReducer = (state = initState, action: Action): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_SUCCESS:
      const {
        payload: { email, password },
      } = action;
      return {
        ...state,
        isLogged: true,
        email,
        password,
      };
    case LoginActionTypes.LOGIN_FAIL:
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
