import { home } from "../url";
import { GetEmployeePositionsSuccessPayload } from "@StoreEmployees";

export const getEmployeePositions = async (): Promise<
  GetEmployeePositionsSuccessPayload | Error
> => {
  const resource = `${home}/meta?=employee_positions`;
  const response = await fetch(resource);
  if (!response.ok) {
    throw new Error("Failed to fetch employee positions");
  }
  return await response.json();
};
