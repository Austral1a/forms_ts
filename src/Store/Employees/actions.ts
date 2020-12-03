import {
  DeleteEmployeePayload,
  GetEmployeesSuccessResponse,
  EmployeeResponse,
  GetEmployeePositionsSuccessResponse,
  GetEmployeesFailResponse,
  CreateEmployeePayload,
} from "./interfaces";
import { ErrorFSAAuto, FSAAuto } from "flux-standard-action";

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
  GET_EMPLOYEE_POSITIONS = "GET_EMPLOYEE_POSITIONS",
  GET_EMPLOYEE_POSITIONS_SUCCESS = "GET_EMPLOYEE_POSITIONS_SUCCESS",
  GET_EMPLOYEE_POSITIONS_FAIL = "GET_EMPLOYEE_POSITIONS_FAIL",
}

//////GET EMPLOYEE POSITION////////////////////////////
export type GetEmployeePositionsRequest = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEE_POSITIONS
>;

export type GetEmployeePositionsSuccess = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_SUCCESS,
  GetEmployeePositionsSuccessResponse
>;

export type GetEmployeePositionsFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL,
  Error
>;

export const getEmployeePositionsAction = (): GetEmployeePositionsRequest => ({
  type: EmployeeActionTypes.GET_EMPLOYEE_POSITIONS,
});

export const getEmployeePositionsSuccess = (
  payload: GetEmployeePositionsSuccessResponse
): GetEmployeePositionsSuccess => {
  return {
    type: EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_SUCCESS,
    payload,
  };
};
export const getEmployeePositionsFail = (
  payload: Error
): GetEmployeePositionsFail => {
  return {
    type: EmployeeActionTypes.GET_EMPLOYEE_POSITIONS_FAIL,
    payload,
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
  payload: CreateEmployeePayload
): CreateEmployeeRequest => ({
  type: EmployeeActionTypes.CREATE_EMPLOYEE,
  payload,
});

export const createEmployeeSuccess = (): CreateEmployeeSuccess => ({
  type: EmployeeActionTypes.CREATE_EMPLOYEE_SUCCESS,
});

export const createEmployeeFail = (payload: Error): CreateEmployeeFail => ({
  type: EmployeeActionTypes.CREATE_EMPLOYEE_FAIL,
  payload,
  error: true,
});
//////////////////////////////////////////////////////////

//////////GET EMPLOYEES//////////////////////////////////

export type GetEmployeeRequest = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEES
>;

export type GetEmployeesSuccess = FSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEES_SUCCESS,
  GetEmployeesSuccessResponse
>;

export type GetEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.GET_EMPLOYEES_FAIL,
  Error
>;

export const getEmployeesAction = (): GetEmployeeRequest => ({
  type: EmployeeActionTypes.GET_EMPLOYEES,
});

export const getEmployeesSuccess = (
  payload: GetEmployeesSuccessResponse
): GetEmployeesSuccess => ({
  type: EmployeeActionTypes.GET_EMPLOYEES_SUCCESS,
  payload,
});

export const getEmployeeFail = (
  payload: GetEmployeesFailResponse
): GetEmployeesFail => ({
  type: EmployeeActionTypes.GET_EMPLOYEES_FAIL,
  payload,
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

export const editEmployeeFail = (payload: Error): EditEmployeeFail => {
  return {
    type: EmployeeActionTypes.EDIT_EMPLOYEE_FAIL,
    payload,
    error: true,
  };
};
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

export const deleteEmployeeAction = (
  payload: DeleteEmployeePayload
): DeleteEmployeeRequest => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE,
  payload,
});

export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE_SUCCESS,
});

export const deleteEmployeeFail = (payload: Error): DeleteEmployeeFail => ({
  type: EmployeeActionTypes.DELETE_EMPLOYEE_FAIL,
  payload,
  error: true,
});

export type EmployeesAction =
  | GetEmployeesSuccess
  | GetEmployeesFail
  | GetEmployeePositionsSuccess
  | GetEmployeePositionsFail;
