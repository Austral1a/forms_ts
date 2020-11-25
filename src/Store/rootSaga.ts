import { LOGIN, login } from "./Login";
import { CREATE_EMPLOYEE, createEmployee } from "./Employees";
import { GET_EMPLOYEES, getEmployees } from "./Employees";
import { DELETE_EMPLOYEE, deleteEmployee } from "./Employees";
import { EDIT_EMPLOYEE, editEmployee } from "./Employees";
import { watchErrors } from "./Errors";
import * as Eff from "redux-saga/effects";

const takeEvery: any = Eff.takeEvery;
export function* rootSaga() {
  yield Eff.all([
    yield takeEvery(LOGIN, login),
    yield takeEvery(GET_EMPLOYEES, getEmployees),
    yield takeEvery(CREATE_EMPLOYEE, createEmployee),
    yield takeEvery(DELETE_EMPLOYEE, deleteEmployee),
    yield takeEvery(EDIT_EMPLOYEE, editEmployee),
    watchErrors(),
  ]);
}
