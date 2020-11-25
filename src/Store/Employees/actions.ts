import {
  GetEmployee,
  GetEmployeesPayload,
  GetEmployeesAction,
  CreateEmployeeAction,
  Employee,
} from "../../Interfaces/Employees";
import { Employees } from "../../Employees";
import {
  CreateEmployeeFail,
  CreateEmployeeRequest,
  CreateEmployeeSuccess,
  DeleteEmployeeFail,
  DeleteEmployeeRequest,
  DeleteEmployeeSuccess,
  EditEmployeeFail,
  EditEmployeeRequest,
  EditEmployeeSuccess,
  EmployeeWithId,
  GetEmployeeRequest,
  GetEmployeesFail,
  GetEmployeesSuccess,
} from "./interfaces";

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

///////CREATE EMPLOYEE///////////////////////////////////
export const createEmployeeAction = (employee: Employee) => ({
  type: CREATE_EMPLOYEE,
  payload: {
    employee,
  },
});
export const createEmployeeSuccess = (): CreateEmployeeSuccess => ({
  type: CREATE_EMPLOYEE_SUCCESS,
});
export const createEmployeeFail = (error: Error): CreateEmployeeFail => ({
  type: CREATE_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
//////////////////////////////////////////////////////////

//////////GET EMPLOYEES//////////////////////////////////
export const getEmployeesAction = (): GetEmployeeRequest => ({
  type: GET_EMPLOYEES,
});

export const getEmployeeSuccess = (
  employees: EmployeeWithId[]
): GetEmployeesSuccess => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const getEmployeeFail = (error: Error): GetEmployeesFail => ({
  type: GET_EMPLOYEES_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
////////////////////////////////////////////

////////////EDIT EMPLOYEE////////////////////
export const editEmployeeAction = (
  editedEmployee: EmployeeWithId
): EditEmployeeRequest => {
  return {
    type: EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};
export const editEmployeeSuccess = (): EditEmployeeSuccess => ({
  type: EDIT_EMPLOYEE_SUCCESS,
});
export const editEmployeeFail = (error: Error): EditEmployeeFail => ({
  type: EDIT_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
////////////////////////////////////////////////

/////DELETE EMPLOYEE///////////////////////
export const deleteEmployeeAction = (id: number): DeleteEmployeeRequest => ({
  type: DELETE_EMPLOYEE,
  payload: { id },
});
export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
  type: DELETE_EMPLOYEE_SUCCESS,
});
export const deleteEmployeeFail = (error: Error): DeleteEmployeeFail => ({
  type: DELETE_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
///////////////////////////////////////////
