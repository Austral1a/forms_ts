import { call, put, takeEvery } from "redux-saga/effects";

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL } from "./actions";
import { login as loginProcess } from "../../API";

interface Action {
  type: string;
  payload: { email: string; password: string; errorMessage: string };
}

// worker
export function* login(action: Action) {
  try {
    const {
      payload: { email, password },
    } = action;
    yield call(loginProcess, email, password);
    yield put({
      type: LOGIN_SUCCESS,
      payload: { email, password },
    });
  } catch (e) {
    yield put({ type: LOGIN_FAIL, payload: { errorMessage: e.message } });
  }
}
