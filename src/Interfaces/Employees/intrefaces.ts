export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export interface GetEmployee extends Employee {
  id: number;
}

export interface GetEmployeesPayload {
  employees: GetEmployee[];
  errorMessage: string;
}

export interface GetEmployeePayload {
  employee: GetEmployee;
  errorMessage: string;
}

export interface GetEmployeesAction {
  type: string;
  payload: GetEmployeesPayload;
}

export interface GetEmployeeAction {
  type: string;
  payload: GetEmployeePayload;
  error: string;
}

//////////////////////////////////////////////////
export interface CreateEmployeePayload {
  employee: Employee;
  errorMessage: string;
}

export interface CreateEmployeeAction {
  type: string;
  payload: CreateEmployeePayload;
}