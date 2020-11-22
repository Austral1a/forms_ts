import { call, put } from "redux-saga/effects";
import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_SUCCESS,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS,
} from "./actions";
import { createEmployee as create, getEmployees as get } from "../../API";

import { GetEmployee, CreateEmployeeAction } from "../../Interfaces/Employees";

export function* createEmployee(action: CreateEmployeeAction) {
  try {
    const {
      payload: {
        employee: { firstName, lastName, email, position },
      },
    } = action;
    yield call(create, firstName, lastName, email, position);
    yield put({
      type: CREATE_EMPLOYEE_SUCCESS,
      payload: { firstName, lastName, email, position },
    });
  } catch (e) {
    yield put({
      type: CREATE_EMPLOYEE_FAIL,
      payload: { errorMessage: e.message },
    });
  }
}

export function* getEmployees() {
  try {
    const employees: GetEmployee[] = yield call(get);
    yield put({
      type: GET_EMPLOYEES_SUCCESS,
      payload: { employees },
    });
  } catch (e) {
    yield put({
      type: GET_EMPLOYEES_FAIL,
      payload: {
        employees: [],
      },
      errorMessage: e.message,
    });
  }
}
