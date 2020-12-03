import { home } from "../url";
import { EmployeePositions } from "@StoreEmployees";

export const getEmployeePositions = async (): Promise<EmployeePositions> => {
  const resource = `${home}/meta?=employeePositions`;
  const response = await fetch(resource);
  if (!response.ok) {
    throw new Error("Failed to fetch employee positions");
  }
  return await response.json();
};
