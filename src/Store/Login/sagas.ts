import { call, put } from "redux-saga/effects";

import { loginSuccess, loginFail } from "./actions";
import { login } from "@API";

interface Action {
  type: string;
  payload: { email: string; password: string; errorMessage: string };
}

// worker
export function* loginSaga(action: Action) {
  try {
    const { payload } = action;
    yield call(login, payload);
    yield put(loginSuccess(payload));
  } catch (e) {
    yield put(loginFail(e));
  }
}
