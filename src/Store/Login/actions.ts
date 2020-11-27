export const LOGIN: string = "LOGIN";
export const LOGIN_SUCCESS: string = "LOGIN_SUCCESS";
export const LOGIN_FAIL: string = "LOGIN_FAIL";

// TODO: replace parameters by obj
export const loginAction = (email: string, password: string) => ({
  type: LOGIN,
  payload: { email, password },
});
