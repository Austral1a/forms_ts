import { LOGIN, login } from "./Login";
import { CREATE_EMPLOYEE, createEmployee } from "./Employees";
import { GET_EMPLOYEES, getEmployees } from "./Employees";
// import { GET_EMPLOYEE, getEmployee } from "./Employees";
import { DELETE_EMPLOYEE, deleteEmployee } from "./Employees";
import { EDIT_EMPLOYEE, editEmployee } from "./Employees";
import { all, takeEvery, takeLatest, take } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    yield takeEvery(GET_EMPLOYEES, getEmployees),
    // yield takeEvery(GET_EMPLOYEE, getEmployee),
    yield takeEvery(LOGIN, login),
    yield takeEvery(CREATE_EMPLOYEE, createEmployee),
    // @ts-ignore
    yield takeEvery(EDIT_EMPLOYEE, editEmployee),
    // @ts-ignore
    yield takeEvery(DELETE_EMPLOYEE, deleteEmployee),
  ]);
}
