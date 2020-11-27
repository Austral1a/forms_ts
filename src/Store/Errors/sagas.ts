import { put, take } from "redux-saga/effects";
import { errorOccurred } from "./actions";
import { EmployeeActionTypes } from "@StoreEmployees";

const fetchErrors = [
  EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  EmployeeActionTypes.GET_EMPLOYEES_FAIL,
];

// TODO: Add watchers for SUCCESS
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
