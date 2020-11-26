import { ErrorFSA, ErrorFSAAuto, FSA, FSAAuto } from "flux-standard-action";
import {
  CREATE_EMPLOYEE,
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE,
  DELETE_EMPLOYEE_FAIL,
  DELETE_EMPLOYEE_SUCCESS,
  EDIT_EMPLOYEE,
  EDIT_EMPLOYEE_FAIL,
  EDIT_EMPLOYEE_SUCCESS,
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAIL,
  GET_EMPLOYEES_SUCCESS,
} from "./actions";
import { ErrorsWatcherState } from "../Errors";
import { LoginState } from "../Login";

export interface State {
  getEmployeesReducer: EmployeesState;
  loginReducer: LoginState;
  errorReducer: ErrorsWatcherState;
}

export interface EmployeesState {
  employees: EmployeeResponse[];
  name: string;
  message: string;
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export interface EmployeeResponse extends Employee {
  id: number;
}

/////CREATE EMPLOYEE///////////
interface CreateEmployeePayload {
  employee: Employee;
}

export type CreateEmployeeRequest = FSAAuto<
  typeof CREATE_EMPLOYEE,
  CreateEmployeePayload
>;

export type CreateEmployeeSuccess = FSAAuto<typeof CREATE_EMPLOYEE_SUCCESS>;
export type CreateEmployeeFail = ErrorFSAAuto<
  typeof CREATE_EMPLOYEE_FAIL,
  Error
>;
/////////////////////////////

//////GET EMPLOYEES//////////////
interface GetEmployeesPayload {
  employees: Employee[];
}
export type GetEmployeeRequest = FSAAuto<typeof GET_EMPLOYEES>;
export type GetEmployeesSuccess = FSAAuto<
  typeof GET_EMPLOYEES_SUCCESS,
  GetEmployeesPayload
>;
export type GetEmployeesFail = ErrorFSAAuto<typeof GET_EMPLOYEES_FAIL, Error>;
/////////////////////////////

///EDIT EMPLOYEE///////
export type EditEmployeeRequest = FSAAuto<
  typeof EDIT_EMPLOYEE,
  EmployeeResponse
>;
export type EditEmployeeSuccess = FSAAuto<typeof EDIT_EMPLOYEE_SUCCESS>;
export type EditEmployeeFail = ErrorFSAAuto<typeof EDIT_EMPLOYEE_FAIL, Error>;
////////////////////////

////DELETE EMPLOYEE/////
export interface DeleteEmployeePayload {
  id: number;
}

export type DeleteEmployeeRequest = FSAAuto<
  typeof DELETE_EMPLOYEE,
  DeleteEmployeePayload
>;
export type DeleteEmployeeSuccess = FSAAuto<typeof DELETE_EMPLOYEE_SUCCESS>;
export type DeleteEmployeeFail = ErrorFSAAuto<
  typeof DELETE_EMPLOYEE_FAIL,
  Error
>;
////////////////////////
