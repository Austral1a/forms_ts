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
export interface GetEmployeesPayload {
  employees: EmployeeResponse[];
}
/////////////////////////////

////DELETE EMPLOYEE/////
export interface DeleteEmployeePayload {
  id: number;
}
////////////////////////
