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

export enum EmployeeActionTypes {
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
  type: EmployeeActionTypes.CREATE_EMPLOYEE,
  payload: {
    employee,
  },
});
export const createEmployeeSuccess = (): CreateEmployeeSuccess => ({
  type: EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
});
export const createEmployeeFail = (error: Error): CreateEmployeeFail => ({
  type: EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
//////////////////////////////////////////////////////////

//////////GET EMPLOYEES//////////////////////////////////
export const getEmployeesAction = (): GetEmployeeRequest => ({
  type: EmployeeActionTypes.GET_EMPLOYEES,
});

export const getEmployeeSuccess = (
  employees: EmployeeResponse[]
): GetEmployeesSuccess => ({
  type: EmployeeActionTypes.GET_EMPLOYEES_SUCCESS,
  payload: { employees },
});

export const getEmployeeFail = (error: Error): GetEmployeesFail => ({
  type: EmployeeActionTypes.GET_EMPLOYEES_FAIL,
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
    type: EmployeeActionTypes.EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};
export const editEmployeeSuccess = (): EditEmployeeSuccess => ({
  type: EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS,
});
export const editEmployeeFail = (error: Error): EditEmployeeFail => ({
  type: EmployeeActionTypes.EDIT_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
////////////////////////////////////////////////

/////DELETE EMPLOYEE///////////////////////
export const deleteEmployeeAction = (id: number): DeleteEmployeeRequest => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE,
  payload: { id },
});
export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
});
export const deleteEmployeeFail = (error: Error): DeleteEmployeeFail => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE_FAIL,
  payload: {
    name: error.name,
    message: error.message,
  },
  error: true,
});
///////////////////////////////////////////
