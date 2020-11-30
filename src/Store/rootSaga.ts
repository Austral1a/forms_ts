import { LoginActionTypes, loginSaga } from "@StoreLogin";
import {
  EmployeeActionTypes,
  getEmployeesSaga,
  createEmployeeSaga,
  deleteEmployeeSaga,
  editEmployeeSaga,
  watchEmployees,
  getEmployeePositionsSaga,
} from "./Employees";
import { watchErrors } from "./Errors";
import { all, takeLatest } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    yield takeLatest(LoginActionTypes.LOGIN, loginSaga),
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES, getEmployeesSaga),
    yield takeLatest(EmployeeActionTypes.CREATE_EMPLOYEE, createEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.EDIT_EMPLOYEE, editEmployeeSaga),
    yield takeLatest(
      EmployeeActionTypes.GET_EMPLOYEE_POSITIONS,
      getEmployeePositionsSaga
    ),
    watchEmployees(),
    watchErrors(),
  ]);
}
