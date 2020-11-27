import { ErrorsWatcherState } from "@StoreErrors";
import { LoginState } from "@StoreLogin";

export interface EmployeesAwareState {
  employeesReducer: EmployeesState;
}

export interface EmployeesState {
  employees: EmployeeResponse[];
  errorMessage: Error;
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
  employee: EmployeeResponse;
}
/////////////////////////////

//////GET EMPLOYEES//////////////
export interface GetEmployeesResponse {
  employees: EmployeeResponse[];
}
/////////////////////////////

////DELETE EMPLOYEE/////
export interface DeleteEmployeePayload {
  id: number;
}
////////////////////////
