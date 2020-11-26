import { call, put } from "redux-saga/effects";
import {
  createEmployeeFail,
  createEmployeeSuccess,
  deleteEmployeeFail,
  deleteEmployeeSuccess,
  editEmployeeFail,
  editEmployeeSuccess,
  getEmployeeFail,
  getEmployeeSuccess,
} from "./actions";
import {
  createEmployee as create,
  getEmployees as get,
  editEmployee as edit,
  delEmployee as del,
} from "../../API";

import {
  CreateEmployeeRequest,
  DeleteEmployeeRequest,
  EditEmployeeRequest,
  EmployeeResponse,
} from "./interfaces";

export function* createEmployee(action: CreateEmployeeRequest) {
  try {
    const {
      payload: { employee },
    } = action;
    yield call(create, employee);
    yield put(createEmployeeSuccess());
  } catch (e) {
    yield put(createEmployeeFail(e));
  }
}

export function* getEmployees() {
  try {
    const employees: EmployeeResponse[] = yield call(get);
    yield put(getEmployeeSuccess(employees));
  } catch (e) {
    yield put(getEmployeeFail(e));
  }
}

export function* editEmployee(action: EditEmployeeRequest) {
  try {
    const {
      payload: { id, firstName, lastName, email, position },
    } = action;
    yield call(edit, id, firstName, lastName, email, position);
    yield put(editEmployeeSuccess());
  } catch (e) {
    yield put(editEmployeeFail(e));
  }
}

export function* deleteEmployee(action: DeleteEmployeeRequest) {
  try {
    const {
      payload: { id },
    } = action;
    yield call(del, id);
    yield put(deleteEmployeeSuccess());
  } catch (e) {
    yield put(deleteEmployeeFail(e));
  }
}
