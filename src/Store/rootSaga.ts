import { LOGIN, login } from "@StoreLogin";
import {
  EmployeeActionTypes,
  getEmployeesSaga,
  createEmployeeSaga,
  deleteEmployeeSaga,
  editEmployeeSaga,
  watchEmployeesSuccessChange,
} from "./Employees";
import { watchErrors } from "./Errors";
import { takeEvery, all, takeLatest } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    yield takeLatest(LOGIN, login),
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES, getEmployeesSaga),
    yield takeLatest(EmployeeActionTypes.CREATE_EMPLOYEE, createEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.EDIT_EMPLOYEE, editEmployeeSaga),
    watchErrors(),
    watchEmployeesSuccessChange(),
  ]);
}
