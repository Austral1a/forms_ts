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
  createEmployee,
  getEmployees,
  editEmployee,
  delEmployee,
} from "../../API";

import {
  CreateEmployeeRequest,
  DeleteEmployeeRequest,
  EditEmployeeRequest,
  EmployeeResponse,
} from "./interfaces";

export function* createEmployeeSaga(action: CreateEmployeeRequest) {
  try {
    const {
      payload: { employee },
    } = action;
    yield call(createEmployee, employee);
    yield put(createEmployeeSuccess());
  } catch (e) {
    yield put(createEmployeeFail(e));
  }
}

export function* getEmployeesSaga() {
  try {
    const employees: EmployeeResponse[] = yield call(getEmployees);
    yield put(getEmployeeSuccess(employees));
  } catch (e) {
    yield put(getEmployeeFail(e));
  }
}

export function* editEmployeeSaga(action: EditEmployeeRequest) {
  try {
    const { payload } = action;
    yield call(editEmployee, payload);
    yield put(editEmployeeSuccess());
  } catch (e) {
    yield put(editEmployeeFail(e));
  }
}

export function* deleteEmployeeSaga(action: DeleteEmployeeRequest) {
  try {
    const {
      payload: { id },
    } = action;
    yield call(delEmployee, id);
    yield put(deleteEmployeeSuccess());
  } catch (e) {
    yield put(deleteEmployeeFail(e));
  }
}
