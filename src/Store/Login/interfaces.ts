export interface LoginState {
  isLogged: boolean;
  email: string;
  password: string;
  name: string;
  message: string;
}
export interface LoginAwareState {
  loginReducer: LoginState;
}
