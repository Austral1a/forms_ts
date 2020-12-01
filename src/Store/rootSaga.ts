import { loginRootSaga } from "@StoreLogin";
import { employeeRootSaga } from "./Employees";
import { watchErrors } from "./Errors";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([loginRootSaga(), employeeRootSaga(), watchErrors()]);
}
