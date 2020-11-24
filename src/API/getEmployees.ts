import { home } from "../url";

interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  id: number;
}

export async function getEmployees() {
  const resource: string = `${home}/employees`;
  const response = await fetch(resource);
  return await response.json();
}
