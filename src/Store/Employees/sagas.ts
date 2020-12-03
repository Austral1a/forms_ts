import { call, put, takeLatest, all } from "redux-saga/effects";
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
  getEmployeesSuccess,
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
    const employeePositions = yield call(getEmployeePositions);
    yield put(getEmployeePositionsSuccess(employeePositions));
  } catch (error) {
    yield put(getEmployeePositionsFail(error));
  }
}

export function* createEmployeeSaga(action: CreateEmployeeRequest) {
  try {
    const {
      payload: { employee },
    } = action;
    yield call(createEmployee, employee);
    yield put(createEmployeeSuccess());
  } catch (error) {
    yield put(createEmployeeFail(error));
  }
}

export function* getEmployeesSaga() {
  try {
    const employees: EmployeeResponse[] = yield call(getEmployees);
    yield put(getEmployeesSuccess({ employees }));
  } catch (error) {
    yield put(getEmployeeFail(error));
  }
}

export function* editEmployeeSaga(action: EditEmployeeRequest) {
  try {
    const { payload } = action;
    yield call(editEmployee, payload);
    yield put(editEmployeeSuccess());
  } catch (error) {
    yield put(editEmployeeFail(error));
  }
}

export function* deleteEmployeeSaga(action: DeleteEmployeeRequest) {
  try {
    const {
      payload: { id },
    } = action;
    yield call(deleteEmployee, id);
    yield put(deleteEmployeeSuccess());
  } catch (error) {
    yield put(deleteEmployeeFail(error));
  }
}

export function* employeeRootSaga() {
  return all([
    yield takeLatest(EmployeeActionTypes.GET_EMPLOYEES, getEmployeesSaga),
    yield takeLatest(EmployeeActionTypes.CREATE_EMPLOYEE, createEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.DELETE_EMPLOYEE, deleteEmployeeSaga),
    yield takeLatest(EmployeeActionTypes.EDIT_EMPLOYEE, editEmployeeSaga),
    yield takeLatest(
      EmployeeActionTypes.GET_EMPLOYEE_POSITIONS,
      getEmployeePositionsSaga
    ),
    yield takeLatest(
      [
        EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
        EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS,
        EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
      ],
      getEmployeesSaga
    ),
  ]);
}
