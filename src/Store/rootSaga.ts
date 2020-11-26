import { LOGIN, login } from "./Login";
import {
  EmployeeActions,
  getEmployees,
  createEmployee,
  deleteEmployee,
  editEmployee,
} from "./Employees";
import { watchErrors } from "./Errors";
import { takeEvery, all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([
    yield takeEvery(LOGIN, login),
    yield takeEvery(EmployeeActions.GET_EMPLOYEES, getEmployees),
    yield takeEvery(EmployeeActions.CREATE_EMPLOYEE, createEmployee),
    yield takeEvery(EmployeeActions.DELETE_EMPLOYEE, deleteEmployee),
    yield takeEvery(EmployeeActions.EDIT_EMPLOYEE, editEmployee),
    watchErrors(),
  ]);
}
