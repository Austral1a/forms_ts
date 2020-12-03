import { ErrorFSAAuto, FSAAuto } from "flux-standard-action";
// TODO: rename
export enum LoginActionType {
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

export type LoginRequest = FSAAuto<LoginActionType.LOGIN, LoginPayload>;

export type LoginSuccess = FSAAuto<
  LoginActionType.LOGIN_SUCCESS,
  LoginSuccessResponse
>;

export type LoginFail = ErrorFSAAuto<LoginActionType.LOGIN_FAIL, Error>;

export const loginAction = (payload: LoginSuccessPayload): LoginRequest => ({
  type: LoginActionType.LOGIN,
  payload,
});

export const loginSuccess = (payload: LoginSuccessResponse): LoginSuccess => ({
  type: LoginActionType.LOGIN_SUCCESS,
  payload,
});

export const loginFail = (error: Error): LoginFail => {
  const { name, message } = error;
  return {
    type: LoginActionType.LOGIN_FAIL,
    payload: { name, message },
    error: true,
  };
};

export type LoginAction = LoginSuccess | LoginFail;
