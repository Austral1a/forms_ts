import { home } from "../url";
import { Employee } from "../Store/Employees/interfaces";

export const createEmployee = async (
  employee: Employee
): Promise<void | Error> => {
  const url = `${home}/employees`;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      ...employee,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    throw new Error("Couldn't create employee");
  }
};
