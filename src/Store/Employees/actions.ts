import {
  GetEmployee,
  GetEmployeesPayload,
  GetEmployeesAction,
  CreateEmployeeAction,
  Employee,
} from "../../Interfaces/Employees";
import { Employees } from "../../Employees";

export const CREATE_EMPLOYEE: string = "CREATE_EMPLOYEE";
export const CREATE_EMPLOYEE_SUCCESS: string = "CREATE_EMPLOYEE_SUCCESS";
export const CREATE_EMPLOYEE_FAIL: string = "CREATE_EMPLOYEE_FAIL";

export const GET_EMPLOYEES = "GET_EMPLOYEES";
export const GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS";
export const GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL";

export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE";
export const EDIT_EMPLOYEE_SUCCESS = "EDIT_EMPLOYEE_SUCCESS";
export const EDIT_EMPLOYEE_FAIL = "EDIT_EMPLOYEE_FAIL";

export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS";
export const DELETE_EMPLOYEE_FAIL = "DELETE_EMPLOYEE_FAIL";

export const createEmployeeAction = (
  employee: Employee
): CreateEmployeeAction => {
  const { firstName, lastName, email, position } = employee;
  return {
    type: CREATE_EMPLOYEE,
    payload: {
      employee: {
        firstName,
        lastName,
        email,
        position,
      },
    },
    error: "",
  };
};

export const getEmployeesAction = () => ({
  type: GET_EMPLOYEES,
  payload: { employees: [] },
});

export const editEmployeeAction = (editedEmployee: GetEmployee) => {
  return {
    type: EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};

interface DeleteEmployeeAction {
  type: string;
  id: number;
  error: string;
}

export const deleteEmployeeAction = (id: number): DeleteEmployeeAction => ({
  type: DELETE_EMPLOYEE,
  id,
  error: "",
});
