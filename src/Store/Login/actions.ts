export const LOGIN: string = "LOGIN";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_FAIL: string = "LOGIN_FAIL";

interface LoginAction {
  email: string;
  password: string;
}

// TODO: replace parameters by obj
export const loginAction = ({ email, password }: LoginAction) => ({
  type: LOGIN,
  payload: { email, password },
});
