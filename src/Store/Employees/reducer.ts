import {
  EmployeeActionTypes,
  EmployeesState,
  EmployeesAction,
} from "@StoreEmployees";

const employeeInitState: EmployeesState = {
  employees: [],
  employeePositions: [],
  name: "",
  message: "",
};
export const employeesReducer = (
  state = employeeInitState,
  action: EmployeesAction
) => {
  switch (action.type) {
    case EmployeeActionTypes.GET_EMPLOYEES_SUCCESS:
      const {
        payload: { employees },
      } = action;
      return {
        ...state,
        employees,
      };
    case EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_SUCCESS:
      const {
        payload: { employeePositions },
      } = action;
      return {
        ...state,
        employeePositions,
      };
    case EmployeeActionTypes.GET_EMPLOYEES_FAIL: {
      const {
        payload: { name, message },
      } = action;
      return {
        ...state,
        name,
        message,
      };
    }
    case EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL: {
      const {
        payload: { name, message },
      } = action;
      return {
        ...state,
        name,
        message,
      };
    }
    default:
      return state;
  }
};
