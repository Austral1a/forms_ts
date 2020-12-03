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

interface LoginSuccessPayload extends LoginPayload {}
interface LoginSuccessResponse extends LoginPayload {}

export type LoginRequest = FSAAuto<LoginActionTypes.LOGIN, LoginPayload>;

export type LoginSuccess = FSAAuto<
  LoginActionTypes.LOGIN_SUCCESS,
  LoginSuccessResponse
>;

export type LoginFail = ErrorFSAAuto<LoginActionTypes.LOGIN_FAIL, Error>;

export const loginAction = (payload: LoginSuccessPayload): LoginRequest => ({
  type: LoginActionTypes.LOGIN,
  payload,
});

export const loginSuccess = (payload: LoginSuccessResponse): LoginSuccess => ({
  type: LoginActionTypes.LOGIN_SUCCESS,
  payload,
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
