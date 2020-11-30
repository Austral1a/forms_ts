import { LoginAction, LoginActionTypes, LoginState } from "./index";

const initState: LoginState = {
  isLogged: false,
  email: "",
  password: "",
  name: "",
  message: "",
};

export const loginReducer = (state = initState, action: LoginAction) => {
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
        payload: { name, message },
      } = action;
      return {
        ...state,
        isLogged: false,
        name,
        message,
      };
    default:
      return state;
  }
};
