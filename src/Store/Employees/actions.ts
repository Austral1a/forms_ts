import {
  DeleteEmployeePayload,
  GetEmployeesSuccessResponse,
  EmployeeResponse,
  GetEmployeePositionsSuccessResponse,
  GetEmployeesFailResponse,
  CreateEmployeePayload,
} from "./interfaces";
import { ErrorFSAAuto, FSAAuto } from "flux-standard-action";

export enum EmployeeActionType {
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
  typeof EmployeeActionType.GET_EMPLOYEE_POSITIONS
>;

export type GetEmployeePositionsSuccess = FSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEE_POSITIONS_SUCCESS,
  GetEmployeePositionsSuccessResponse
>;

export type GetEmployeePositionsFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEE_POSITIONS_FAIL,
  Error
>;

export const getEmployeePositionsAction = (): GetEmployeePositionsRequest => ({
  type: EmployeeActionType.GET_EMPLOYEE_POSITIONS,
});

export const getEmployeePositionsSuccess = (
  payload: GetEmployeePositionsSuccessResponse
): GetEmployeePositionsSuccess => {
  return {
    type: EmployeeActionType.GET_EMPLOYEE_POSITIONS_SUCCESS,
    payload,
  };
};
export const getEmployeePositionsFail = (
  payload: Error
): GetEmployeePositionsFail => {
  return {
    type: EmployeeActionType.GET_EMPLOYEE_POSITIONS_FAIL,
    payload,
    error: true,
  };
};
///////////////////////////////////////////////////

///////CREATE EMPLOYEE///////////////////////////////////
export type CreateEmployeeRequest = FSAAuto<
  typeof EmployeeActionType.CREATE_EMPLOYEE,
  CreateEmployeePayload
>;

export type CreateEmployeeSuccess = FSAAuto<
  typeof EmployeeActionType.CREATE_EMPLOYEE_SUCCESS
>;

export type CreateEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionType.CREATE_EMPLOYEE_FAIL,
  Error
>;

export const createEmployeeAction = (
  payload: CreateEmployeePayload
): CreateEmployeeRequest => ({
  type: EmployeeActionType.CREATE_EMPLOYEE,
  payload,
});

export const createEmployeeSuccess = (): CreateEmployeeSuccess => ({
  type: EmployeeActionType.CREATE_EMPLOYEE_SUCCESS,
});

export const createEmployeeFail = (payload: Error): CreateEmployeeFail => ({
  type: EmployeeActionType.CREATE_EMPLOYEE_FAIL,
  payload,
  error: true,
});
//////////////////////////////////////////////////////////

//////////GET EMPLOYEES//////////////////////////////////

export type GetEmployeeRequest = FSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEES
>;

export type GetEmployeesSuccess = FSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEES_SUCCESS,
  GetEmployeesSuccessResponse
>;

export type GetEmployeesFail = ErrorFSAAuto<
  typeof EmployeeActionType.GET_EMPLOYEES_FAIL,
  Error
>;

export const getEmployeesAction = (): GetEmployeeRequest => ({
  type: EmployeeActionType.GET_EMPLOYEES,
});

export const getEmployeesSuccess = (
  payload: GetEmployeesSuccessResponse
): GetEmployeesSuccess => ({
  type: EmployeeActionType.GET_EMPLOYEES_SUCCESS,
  payload,
});

export const getEmployeeFail = (
  payload: GetEmployeesFailResponse
): GetEmployeesFail => ({
  type: EmployeeActionType.GET_EMPLOYEES_FAIL,
  payload,
  error: true,
});
////////////////////////////////////////////

////////////EDIT EMPLOYEE////////////////////
export type EditEmployeeRequest = FSAAuto<
  typeof EmployeeActionType.EDIT_EMPLOYEE,
  EmployeeResponse
>;

export type EditEmployeeSuccess = FSAAuto<
  typeof EmployeeActionType.EDIT_EMPLOYEE_SUCCESS
>;

export type EditEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionType.EDIT_EMPLOYEE_FAIL,
  Error
>;

export const editEmployeeAction = (
  editedEmployee: EmployeeResponse
): EditEmployeeRequest => {
  return {
    type: EmployeeActionType.EDIT_EMPLOYEE,
    payload: editedEmployee,
  };
};

export const editEmployeeSuccess = (): EditEmployeeSuccess => ({
  type: EmployeeActionType.EDIT_EMPLOYEE_SUCCESS,
});

export const editEmployeeFail = (payload: Error): EditEmployeeFail => {
  return {
    type: EmployeeActionType.EDIT_EMPLOYEE_FAIL,
    payload,
    error: true,
  };
};
////////////////////////////////////////////////

/////DELETE EMPLOYEE///////////////////////
export type DeleteEmployeeRequest = FSAAuto<
  typeof EmployeeActionType.DELETE_EMPLOYEE,
  DeleteEmployeePayload
>;

export type DeleteEmployeeSuccess = FSAAuto<
  typeof EmployeeActionType.DELETE_EMPLOYEE_SUCCESS
>;

export type DeleteEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionType.DELETE_EMPLOYEE_FAIL,
  Error
>;

export const deleteEmployeeAction = (
  payload: DeleteEmployeePayload
): DeleteEmployeeRequest => ({
  type: EmployeeActionType.DELETE_EMPLOYEE,
  payload,
});

export const deleteEmployeeSuccess = (): DeleteEmployeeSuccess => ({
  type: EmployeeActionType.DELETE_EMPLOYEE_SUCCESS,
});

export const deleteEmployeeFail = (payload: Error): DeleteEmployeeFail => ({
  type: EmployeeActionType.DELETE_EMPLOYEE_FAIL,
  payload,
  error: true,
});

export type EmployeesAction =
  | GetEmployeesSuccess
  | GetEmployeesFail
  | GetEmployeePositionsSuccess
  | GetEmployeePositionsFail;
