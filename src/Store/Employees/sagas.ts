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
  EmployeeResponse,
  getEmployeePositionsSuccess,
  getEmployeePositionsFail,
} from "@StoreEmployees";
import {
  createEmployee,
  deleteEmployee,
  editEmployee,
  getEmployees,
  getEmployeePositions,
} from "@API";

export function* getEmployeePositionsSaga() {
  try {
    const employee_positions = yield call(getEmployeePositions);
    yield put(getEmployeePositionsSuccess(employee_positions));
  } catch (e) {
    yield put(getEmployeePositionsFail(e));
  }
}

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
    yield put(getEmployeeSuccess({ employees }));
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

export function* watchEmployees() {
  while (true) {
    yield take([
      EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
      EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS,
      EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
    ]);
    const employees: EmployeeResponse[] = yield call(getEmployees);
    yield put(getEmployeeSuccess({ employees }));
  }
}
