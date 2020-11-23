import {
  GetEmployee,
  GetEmployeesPayload,
  GetEmployeesAction,
  CreateEmployeeAction,
  Employee,
} from "../../Interfaces/Employees";

export const CREATE_EMPLOYEE: string = "CREATE_EMPLOYEE";
export const CREATE_EMPLOYEE_SUCCESS: string = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAIL: string = "CREATE_EMPLOYEE_FAIL";

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL";

export const GET_EMPLOYEE = "GET_EMPLOYEE";
export const GET_EMPLOYEE_SUCCESS = "GET_EMPLOYEE_SUCCESS";
export const GET_EMPLOYEE_FAIL = "GET_EMPLOYEE_FAIL";

export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const EDIT_EMPLOYEE_SUCCESS = "EDIT_EMPLOYEE_SUCCESS";
export const EDIT_EMPLOYEE_FAIL = "EDIT_EMPLOYEE_FAIL";

export const createEmployeeAction = (
  firstName: string,
  lastName: string,
  email: string,
  position: string
): CreateEmployeeAction => ({
  type: CREATE_EMPLOYEE,
  payload: {
    employee: {
      firstName,
      lastName,
      email,
      position,
    },
    errorMessage: "",
  },
});

export const getEmployeesAction = () => ({
  type: GET_EMPLOYEES,
});

export const getEmployeeAction = (id: number) => ({
  type: GET_EMPLOYEE,
  payload: {
    id,
  },
});

export const editEmployeeAction = (editedEmployee: GetEmployee) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};
