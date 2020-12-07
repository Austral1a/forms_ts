import { LoginAction, LoginActionType, LoginState } from "./index";

const loginInitState: LoginState = {
  isLogged: false,
  email: "",
  password: "",
  name: "",
  message: "",
};

export const loginReducer = (state = loginInitState, action: LoginAction) => {
  switch (action.type) {
    case LoginActionType.LOGIN_SUCCESS:
      const {
        payload: { email, password },
      } = action;
      return {
        ...state,
        isLogged: true,
        email,
        password,
      };
    case LoginActionType.LOGIN_FAIL:
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
