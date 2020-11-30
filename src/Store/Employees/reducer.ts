import {
  EmployeeActionTypes,
  GetEmployeePositionsAction,
  GetEmployeePositionsState,
  GetEmployeesAction,
  GetEmployeeState,
} from "@StoreEmployees";

const initState: GetEmployeeState = {
  employees: [],
  name: "",
  message: "",
};

export const employeesReducer = (
  state = initState,
  action: GetEmployeesAction
) => {
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

const employeePositionsInitState: GetEmployeePositionsState = {
  employee_positions: [],
  name: "",
  message: "",
};

export const employeePositionsReducer = (
  state = employeePositionsInitState,
  action: GetEmployeePositionsAction
) => {
  switch (action.type) {
    case EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_SUCCESS:
      const {
        payload: { employee_positions },
      } = action;
      return {
        ...employeePositionsInitState,
        employee_positions,
      };
    case EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL:
      const {
        payload: { name, message },
      } = action;
      return {
        ...employeePositionsInitState,
        name,
        message,
      };
  }
};
