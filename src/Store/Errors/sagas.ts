import { put, take } from "redux-saga/effects";
import { EmployeeActionTypes } from "@StoreEmployees";
import { LoginActionTypes } from "@StoreLogin";
import { errorOccurredAction } from "./actions";

const fetchErrors = [
  LoginActionTypes.LOGIN_FAIL,
  EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  EmployeeActionTypes.EDIT_EMPLOYEE_FAIL,
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
      yield put(errorOccurredAction({ errorMessage: message }));
    }
  }
}
