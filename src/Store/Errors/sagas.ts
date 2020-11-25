import { take, put } from "redux-saga/effects";
import { errorOccurred } from "./actions";
export function* watchErrors() {
  while (true) {
    const action = yield take("*");
    if (action.error) {
      const {
        payload: { message },
      } = action;
      yield put(errorOccurred(message));
    }
  }
}
