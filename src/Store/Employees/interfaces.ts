import { ErrorsWatcherState } from "@StoreErrors";
import { LoginState } from "@StoreLogin";
import { EmployeeModalFormFields } from "@Employees";

export interface State {
  employeesReducer: EmployeesState;
  loginReducer: LoginState;
  errorsReducer: ErrorsWatcherState;
}

export interface EmployeeAwareState {
  employeesReducer: EmployeesState;
}

export interface EmployeePositionsAwareState {
  employeePositionsReducer: EmployeePositionsState;
}

export interface EmployeesState {
  employees: EmployeeResponse[];
  name: string;
  message: string;
}

export interface EmployeePositionsState {
  employee_positions: EmployeePositions;
  name: string;
  message: string;
}

export interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  id: number;
}

/////CREATE EMPLOYEE///////////
export interface CreateEmployeeSuccessPayload {
  employee: EmployeeModalFormFields;
}
export interface CreateEmployeeFailPayload {
  name: string;
  message: string;
}
/////////////////////////////

//////GET EMPLOYEES//////////////
export interface GetEmployeesSuccessPayload {
  employees: EmployeeResponse[];
}
export interface GetEmployeesFailPayload {
  name: string;
  message: string;
}
/////////////////////////////

////DELETE EMPLOYEE/////
export interface DeleteEmployeePayload {
  id: number;
}
////////////////////////

//////EMPLOYEE POSITIONS///
export type EmployeePositions = string[] | [];
export interface GetEmployeePositionsSuccessPayload {
  employee_positions: EmployeePositions;
}
///////////////////////

export interface GetEmployeeState {
  employees: EmployeeModalFormFields[];
  name: string;
  message: string;
}

export interface GetEmployeePositionsState {
  employee_positions: EmployeePositions;
  name: string;
  message: string;
}
