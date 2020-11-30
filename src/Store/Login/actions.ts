import { ErrorFSAAuto, FSAAuto } from "flux-standard-action";

export enum LoginActionTypes {
  LOGIN = "LOGIN",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAIL = "LOGIN_FAIL",
}

interface LoginPayload {
  email: string;
  password: string;
}

export type LoginRequest = FSAAuto<LoginActionTypes.LOGIN, LoginPayload>;
export type LoginSuccess = FSAAuto<
  LoginActionTypes.LOGIN_SUCCESS,
  LoginPayload
>;
export type LoginFail = ErrorFSAAuto<LoginActionTypes.LOGIN_FAIL, Error>;

export const loginAction = ({
  email,
  password,
}: LoginPayload): LoginRequest => ({
  type: LoginActionTypes.LOGIN,
  payload: { email, password } as LoginPayload,
});

export const loginSuccess = ({
  email,
  password,
}: LoginPayload): LoginSuccess => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
  payload: { email, password } as LoginPayload,
});

export const loginFail = (error: Error): LoginFail => {
  const { name, message } = error;
  return {
    type: LoginActionTypes.LOGIN_FAIL,
    payload: { name, message },
    error: true,
  };
};

export type LoginAction = LoginSuccess | LoginFail;
