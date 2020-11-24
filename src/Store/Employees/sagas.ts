import { call, put } from "redux-saga/effects";
import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
  DELETE_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE_FAIL,
  EDIT_EMPLOYEE_SUCCESS,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS,
} from "./actions";
import {
  createEmployee as create,
  getEmployees as get,
  editEmployee as edit,
  delEmployee as del,
} from "../../API";

import {
  GetEmployee,
  CreateEmployeeAction,
  GetEmployeesAction,
  GetEmployeesPayload,
} from "../../Interfaces/Employees";

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
      payload: { employees } as GetEmployeesPayload,
    } as GetEmployeesAction);
  } catch (e) {
    yield put({
      type: GET_EMPLOYEES_FAIL,
      error: e.message,
    });
  }
}
/*

export function* getEmployee(action: { payload: { id: number } }) {
  try {
    const employee: Employee = yield call(getOne, action.payload.id);
    yield put({
      type: GET_EMPLOYEE_SUCCESS,
      payload: { employee } as GetEmployeePayload,
    } as GetEmployeeAction);
  } catch (e) {
    yield put({
      type: GET_EMPLOYEE_FAIL,
      error: e.message,
    } as GetEmployeeAction);
  }
}
*/

export function* editEmployee(action: {
  payload: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    position: string;
  };
}) {
  try {
    const {
      payload: { id, firstName, lastName, email, position },
    } = action;
    yield call(edit, id, firstName, lastName, email, position);
    yield put({
      type: EDIT_EMPLOYEE_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: EDIT_EMPLOYEE_FAIL,
      errorMessage: e.message,
    });
  }
}

export function* deleteEmployee(action: { id: number }) {
  try {
    const { id } = action;
    yield call(del, id);
    yield put({
      type: DELETE_EMPLOYEE_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: DELETE_EMPLOYEE_FAIL,
      error: e.message,
    });
  }
}
