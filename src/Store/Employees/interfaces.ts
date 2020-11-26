import { ErrorFSAAuto, FSAAuto } from "flux-standard-action";
import { EmployeeActionTypes } from "./actions";
import { ErrorsWatcherState } from "../Errors";
import { LoginState } from "../Login";

export interface State {
  employeesReducer: EmployeesState;
  loginReducer: LoginState;
  errorReducer: ErrorsWatcherState;
}

export interface EmployeesState {
  employees: EmployeeResponse[];
  name: string;
  message: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}


/////CREATE EMPLOYEE///////////
interface CreateEmployeePayload {
  employee: Employee;
}


/////////////////////////////

//////GET EMPLOYEES//////////////
interface GetEmployeesPayload {
  employees: Employee[];
}
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
/////////////////////////////

///EDIT EMPLOYEE///////
export type EditEmployeeRequest = FSAAuto<
  typeof EmployeeActionTypes.EDIT_EMPLOYEE,
  Employee
>;
export type EditEmployeeSuccess = FSAAuto<
  typeof EmployeeActionTypes.EDIT_EMPLOYEE_SUCCESS
>;
export type EditEmployeeFail = ErrorFSAAuto<
  typeof EmployeeActionTypes.EDIT_EMPLOYEE_FAIL,
  Error
>;
////////////////////////

////DELETE EMPLOYEE/////
export interface DeleteEmployeePayload {
  id: number;
}

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
////////////////////////
