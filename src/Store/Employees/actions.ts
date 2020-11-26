import {
  CreateEmployeeFail,
  CreateEmployeeSuccess,
  DeleteEmployeeFail,
  DeleteEmployeeRequest,
  DeleteEmployeeSuccess,
  EditEmployeeFail,
  EditEmployeeRequest,
  EditEmployeeSuccess,
  Employee,
  EmployeeResponse,
  GetEmployeeRequest,
  GetEmployeesFail,
  GetEmployeesSuccess,
} from "./interfaces";

export enum EmployeeActions {
  CREATE_EMPLOYEE = "CREATE_EMPLOYEE",
  CREATE_EMPLOYEE_SUCCESS = "CREATE_EMPLOYEE_SUCCESS",
  CREATE_EMPLOYEE_FAIL = "CREATE_EMPLOYEE_FAIL",
  GET_EMPLOYEES = "GET_EMPLOYEES",
  GET_EMPLOYEES_SUCCESS = "GET_EMPLOYEES_SUCCESS",
  GET_EMPLOYEES_FAIL = "GET_EMPLOYEES_FAIL",
  EDIT_EMPLOYEE = "EDIT_EMPLOYEE",
  EDIT_EMPLOYEE_SUCCESS = "EDIT_EMPLOYEE_SUCCESS",
  EDIT_EMPLOYEE_FAIL = "EDIT_EMPLOYEE_FAIL",
  DELETE_EMPLOYEE = "DELETE_EMPLOYEE",
  DELETE_EMPLOYEE_SUCCESS = "DELETE_EMPLOYEE_SUCCESS",
  DELETE_EMPLOYEE_FAIL = "DELETE_EMPLOYEE_FAIL",
}

///////CREATE EMPLOYEE///////////////////////////////////
export const createEmployeeAction = (employee: Employee) => ({
  type: EmployeeActions.CREATE_EMPLOYEE,
  payload: {
    employee,
  },
});
export const createEmployeeSuccess = (): CreateEmployeeSuccess => ({
  type: EmployeeActions.CREATE_EMPLOYEE_SUCCESS,
});
export const createEmployeeFail = (error: Error): CreateEmployeeFail => ({
  type: EmployeeActions.CREATE_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
//////////////////////////////////////////////////////////

//////////GET EMPLOYEES//////////////////////////////////
export const getEmployeesAction = (): GetEmployeeRequest => ({
  type: EmployeeActions.GET_EMPLOYEES,
});

export const getEmployeeSuccess = (
  employees: EmployeeResponse[]
): GetEmployeesSuccess => ({
  type: EmployeeActions.GET_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const getEmployeeFail = (error: Error): GetEmployeesFail => ({
  type: EmployeeActions.GET_EMPLOYEES_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
////////////////////////////////////////////

////////////EDIT EMPLOYEE////////////////////
export const editEmployeeAction = (
  editedEmployee: EmployeeResponse
): EditEmployeeRequest => {
  return {
    type: EmployeeActions.EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};
export const editEmployeeSuccess = (): EditEmployeeSuccess => ({
  type: EmployeeActions.EDIT_EMPLOYEE_SUCCESS,
});
export const editEmployeeFail = (error: Error): EditEmployeeFail => ({
  type: EmployeeActions.EDIT_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
////////////////////////////////////////////////

/////DELETE EMPLOYEE///////////////////////
export const deleteEmployeeAction = (id: number): DeleteEmployeeRequest => ({
  type: EmployeeActions.DELETE_EMPLOYEE,
  payload: { id },
});
export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
  type: EmployeeActions.DELETE_EMPLOYEE_SUCCESS,
});
export const deleteEmployeeFail = (error: Error): DeleteEmployeeFail => ({
  type: EmployeeActions.DELETE_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
///////////////////////////////////////////
