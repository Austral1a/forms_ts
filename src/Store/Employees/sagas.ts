import { call, put, take } from "redux-saga/effects";
import {
  createEmployeeFail,
  CreateEmployeeRequest,
  createEmployeeSuccess,
  deleteEmployeeFail,
  DeleteEmployeeRequest,
  deleteEmployeeSuccess,
  editEmployeeFail,
  EditEmployeeRequest,
  editEmployeeSuccess,
  EmployeeActionTypes,
  getEmployeeFail,
  getEmployeeSuccess,
} from "./actions";
import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  getEmployees,
} from "../../API";

import { EmployeeResponse } from "./interfaces";

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
    yield call(deleteEmployee, id);
    yield put(deleteEmployeeSuccess());
  } catch (e) {
    yield put(deleteEmployeeFail(e));
  }
}

export function* watchEmployeesSuccessChange() {
  while (true) {
    yield take([
      EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
      EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS,
      EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
    ]);
    const employees: EmployeeResponse[] = yield call(getEmployees);
    yield put(getEmployeeSuccess(employees));
  }
}
