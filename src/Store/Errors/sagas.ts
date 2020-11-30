import { put, take } from "redux-saga/effects";
import { errorOccurred } from "./actions";
import { EmployeeActionTypes } from "@StoreEmployees";
import { LoginActionTypes } from "@StoreLogin";

const fetchErrors = [
  LoginActionTypes.LOGIN_FAIL,
  EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  EmployeeActionTypes.DELETE_EMPLOYEE_FAIL,
  EmployeeActionTypes.GET_EMPLOYEES_FAIL,
  EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL,
];

export function* watchErrors() {
  while (true) {
    const action = yield take(fetchErrors);
    if (action.error) {
      const {
        payload: { message },
      } = action;
      yield put(errorOccurred(message));
    }
  }
}
