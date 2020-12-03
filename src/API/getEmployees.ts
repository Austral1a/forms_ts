import { home } from "../url";

interface EmployeeResponse {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  id: number;
}

export async function getEmployees(): Promise<EmployeeResponse> {
  const resource: string = `${home}/employees`;
  const response = await fetch(resource);
  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Couldn't fetch employees, please try to reload page");
  }
}
