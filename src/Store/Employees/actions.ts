import {
  CreateEmployeePayload,
  DeleteEmployeePayload,
  GetEmployeesPayload,
  EmployeeResponse,
  GetEmployeePositionsSuccessPayload,
} from "./interfaces";
import { ErrorFSAAuto, FSAAuto } from "flux-standard-action";
import { EmployeeModalFormFields } from "@Employees";

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
  GET_EMPLOYEE_POSITIONS = "GET_EMPLOYEES_POSITIONS",
  GET_EMPLOYEE_POSITIONS_SUCCESS = "GET_EMPLOYEE_POSITIONS_SUCCESS",
  GET_EMPLOYEE_POSITIONS_FAIL = "GET_EMPLOYEE_POSITIONS_FAIL",
}

//////GET EMPLOYEE POSITION////////////////////////////
export type GetEmployeePositionsRequest = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEE_POSITIONS
>;
export type GetEmployeePositionsSuccess = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_SUCCESS,
  GetEmployeePositionsSuccessPayload
>;
export type GetEmployeePositionsFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL,
  Error
>;

export const getEmployeePositionsAction = (): GetEmployeePositionsRequest => ({
  type: EmployeeActionTypes.GET_EMPLOYEE_POSITIONS,
});
export const getEmployeePositionsSuccess = (
  positions: GetEmployeePositionsSuccessPayload
): GetEmployeePositionsSuccess => {
  const { employee_positions } = positions;
  return {
    type: EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_SUCCESS,
    payload: {
      employee_positions,
    },
  };
};
export const getEmployeePositionsFail = (
  error: Error
): GetEmployeePositionsFail => {
  const { name, message } = error;
  return {
    type: EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL,
    payload: {
      name,
      message,
    },
    error: true,
  };
};
///////////////////////////////////////////////////

///////CREATE EMPLOYEE///////////////////////////////////
export type CreateEmployeeRequest = FSAAuto<
  typeof EmployeeActionTypes.CREATE_EMPLOYEE,
  CreateEmployeePayload
>;

export type CreateEmployeeSuccess = FSAAuto<
  typeof EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS
>;
export type CreateEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  Error
>;
export const createEmployeeAction = (
  employee: EmployeeModalFormFields
): CreateEmployeeRequest => ({
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

export type GetEmployeeRequest = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEES
>;
export type GetEmployeesSuccess = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEES_SUCCESS,
  GetEmployeesPayload
>;
export type GetEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEES_FAIL,
  Error
>;
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
export type EditEmployeeRequest = FSAAuto<
  typeof EmployeeActionTypes.EDIT_EMPLOYEE,
  EmployeeResponse
>;
export type EditEmployeeSuccess = FSAAuto<
  typeof EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS
>;
export type EditEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.EDIT_EMPLOYEE_FAIL,
  Error
>;
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
export type DeleteEmployeeRequest = FSAAuto<
  typeof EmployeeActionTypes.DELETE_EMPLOYEE,
  DeleteEmployeePayload
>;
export type DeleteEmployeeSuccess = FSAAuto<
  typeof EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS
>;
export type DeleteEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.DELETE_EMPLOYEE_FAIL,
  Error
>;
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

export type GetEmployeesAction = GetEmployeesSuccess | GetEmployeesFail;
export type GetEmployeePositionsAction =
  | GetEmployeePositionsSuccess
  | GetEmployeePositionsFail;
