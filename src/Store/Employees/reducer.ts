import { GET_EMPLOYEES_FAIL, GET_EMPLOYEES_SUCCESS, GET_EMPLOYEE_FAIL, GET_EMPLOYEE_SUCCESS } from "./actions";

import {
  GetEmployeesAction,
  GetEmployeesPayload,
} from "../../Interfaces/Employees";

const initState = {
  employees: [],
  errorMessage: "",
};

export const reducer = (
  state = initState,
  action: GetEmployeesAction
): GetEmployeesPayload => {
  switch (action.type) {
    case GET_EMPLOYEES_SUCCESS:
      const {
        payload: { employees },
      } = action;
      return {
        ...state,
        employees,
      };
    case GET_EMPLOYEES_FAIL:
      const {
        payload: { errorMessage },
      } = action;
      return {
        ...state,
        errorMessage,
      };
    default:
      return state;
  }
};

interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

const getEmployeeInitState = {
  employee : {
    firstName: '',
    lastName: '',
    email: '',
    position: ''
  },
  errorMessage: ''
}

export const getEmployeeReducer = (state = getEmployeeInitState, action: {
  type: string;
  payload: {employee: {firstName: string, lastName: string, email: string, position: string}, errorMessage: string}
}) => {
  switch (action.type) {
    case GET_EMPLOYEE_SUCCESS:
      const {
        payload: {employee: {firstName, lastName, email, position}}
      } = action
          return {
        ...state,
            firstName,
            lastName,
            email,
            position
          }

    case GET_EMPLOYEE_FAIL:
      const {payload: {errorMessage}} = action
          return {
        ...state,
            errorMessage
          }
    default:
      return state
  }
}
