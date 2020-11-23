import { home } from "../url";

interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  id: number;
}

export const getEmployees = (): Promise<EmployeeResponse[]> => {
  const resource: string = `${home}/employees`;
  return fetch(resource)
    .then((res) => res.json())
    .then((employees: EmployeeResponse[]) => employees);
};
