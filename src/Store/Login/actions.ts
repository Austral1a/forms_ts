export const LOGIN: string = "LOGIN";

export const loginAction = (email: string, password: string) => ({
  type: LOGIN,
  payload: { email, password },
});
