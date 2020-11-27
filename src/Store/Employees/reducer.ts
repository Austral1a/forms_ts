import {
  EmployeeActionTypes,
  GetEmployeesFail,
  GetEmployeesSuccess,
} from "./actions";
import { EmployeeModalFormFields } from "@Employees";
import {GetEmployeesAction} from './actions'



const initState: GetEmployeeState = {
  employees: [],
  name: "",
  message: "",
};

export const employeesReducer = (state = initState, action: GetEmployeesAction) => {
  // TODO: Add action type
  switch (action.type) {
    case EmployeeActionTypes.GET_EMPLOYEES_SUCCESS:
      const {
        payload: { employees },
      } = action;
      return {
        ...state,
        employees,
      };
    case EmployeeActionTypes.GET_EMPLOYEES_FAIL:
      const {
        payload: { name, message },
      } = action;
      return {
        ...state,
        name,
        message,
      };
    default:
      return state;
  }
};
