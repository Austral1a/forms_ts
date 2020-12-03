import { EmployeeModalFormFields } from "@Employees";

export interface EmployeeAwareState {
  employeesReducer: EmployeesState;
}
export interface EmployeesState {
  employees: EmployeeResponse[];
  employeePositions: EmployeePositions;
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

// CREATE EMPLOYEE
export interface CreateEmployeePayload {
  employee: EmployeeModalFormFields;
}

// GET EMPLOYEES
export interface GetEmployeesSuccessResponse {
  employees: EmployeeResponse[];
}

export interface GetEmployeesFailResponse {
  name: string;
  message: string;
}

// DELETE EMPLOYEE
export interface DeleteEmployeePayload {
  id: number;
}

export type EmployeePositions = string[];

export interface GetEmployeePositionsSuccessResponse {
  employeePositions: EmployeePositions;
}
