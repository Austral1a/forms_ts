import { GET_EMPLOYEES_FAIL, GET_EMPLOYEES_SUCCESS } from "./actions";

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
