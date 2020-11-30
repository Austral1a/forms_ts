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

export interface EmployeesState {
  employees: EmployeeResponse[];
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
export interface CreateEmployeePayload {
  employee: EmployeeModalFormFields;
}
/////////////////////////////

//////GET EMPLOYEES//////////////
export interface GetEmployeesPayload {
  employees: EmployeeResponse[];
}
/////////////////////////////

////DELETE EMPLOYEE/////
export interface DeleteEmployeePayload {
  id: number;
}
////////////////////////

//////EMPLOYEE POSITIONS///
export interface GetEmployeePositionsSuccessPayload {
  employee_positions: string[];
}
///////////////////////

export interface GetEmployeeState {
  employees: EmployeeModalFormFields[];
  name: string;
  message: string;
}
