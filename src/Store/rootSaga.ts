import { LOGIN, login } from "./Login";
import { CREATE_EMPLOYEE, createEmployee } from "./Employees";
import { GET_EMPLOYEES, getEmployees } from "./Employees";
import { all, takeEvery } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    yield takeEvery(CREATE_EMPLOYEE, createEmployee),
    yield takeEvery(GET_EMPLOYEES, getEmployees),
    yield takeEvery(LOGIN, login),
  ]);
}
