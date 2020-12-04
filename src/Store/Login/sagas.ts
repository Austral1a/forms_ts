import { call, put, takeLatest } from "redux-saga/effects";

import {
  loginSuccess,
  loginFail,
  LoginRequest,
  LoginActionType,
} from "./actions";
import { login } from "@API";

export function* loginSaga(action: LoginRequest) {
  try {
    const { payload } = action;
    yield call(login, payload);
    yield put(loginSuccess(payload));
  } catch (error) {
    yield put(loginFail(error));
  }
}

export function* loginRootSaga() {
  yield takeLatest(LoginActionType.LOGIN, loginSaga);
}
