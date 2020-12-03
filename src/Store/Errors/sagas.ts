import { put, take } from "redux-saga/effects";
import { EmployeeActionTypes } from "@StoreEmployees";
import { LoginActionType } from "@StoreLogin";
import { errorOccurredAction } from "./actions";

const fetchErrors = [
  LoginActionType.LOGIN_FAIL,
  EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  EmployeeActionTypes.EDIT_EMPLOYEE_FAIL,
  EmployeeActionTypes.DELETE_EMPLOYEE_FAIL,
  EmployeeActionTypes.GET_EMPLOYEES_FAIL,
  EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL,
];

export function* watchErrors() {
  while (true) {
    // TODO: watch for FAIL
    const action = yield take(fetchErrors);
    if (action.error) {
      yield put(errorOccurredAction({ errorMessage: action.payload.message }));
    }
  }
}
