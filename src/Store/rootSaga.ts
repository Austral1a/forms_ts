import { LOGIN, login } from "./Login";
import {
  EmployeeActionTypes,
  getEmployeesSaga,
  createEmployeeSaga,
  deleteEmployeeSaga,
  editEmployeeSaga,
} from "./Employees";
import { watchErrors } from "./Errors";
import { takeEvery, all, takeLatest } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    yield takeEvery(LOGIN, login),
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES, getEmployeesSaga),
    yield takeLatest(EmployeeActionTypes.CREATE_EMPLOYEE, createEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.EDIT_EMPLOYEE, editEmployeeSaga),
    watchErrors(),
  ]);
}
