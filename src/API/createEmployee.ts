import { home } from "../url";
import { EmployeeModalFormFields } from "@Employees";

export const createEmployee = async (
  employee: EmployeeModalFormFields
): Promise<void> => {
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
