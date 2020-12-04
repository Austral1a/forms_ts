import { put, call, take } from "redux-saga/effects";
import { errorOccurredAction } from "./actions";

export function* takexSaga(pattern: RegExp) {
  let action;

  while (true) {
    action = yield take("*");

    if (pattern.test(action.type)) {
      break;
    }
  }
  return action;
}

export function takex(pattern: RegExp) {
  return call(takexSaga, pattern);
}

const failedActionTypePattern = /FAIL$/;

export function* watchErrors() {
  while (true) {
    const action = yield takex(failedActionTypePattern);

    if (action.error) {
      yield put(errorOccurredAction({ errorMessage: action.payload.message }));
    }
  }
}
