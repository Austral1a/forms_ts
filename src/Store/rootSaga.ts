import { LOGIN, login } from "./Login";
import { CREATE_EMPLOYEE, createEmployee } from "./Employees";
import { GET_EMPLOYEES, getEmployees } from "./Employees";
import { GET_EMPLOYEE, getEmployee } from "./Employees";
import { EDIT_EMPLOYEE, editEmployee } from "./Employees";
import { all, takeEvery, takeLatest } from "redux-saga/effects";

export function* rootSaga() {
  // @ts-ignore
  yield all([
    yield takeLatest(GET_EMPLOYEES, getEmployees),
    // @ts-ignore
    yield takeEvery(GET_EMPLOYEE, getEmployee),
    yield takeEvery(LOGIN, login),
    yield takeEvery(CREATE_EMPLOYEE, createEmployee),
    // @ts-ignore
    yield takeEvery(EDIT_EMPLOYEE, editEmployee),
  ]);
}
