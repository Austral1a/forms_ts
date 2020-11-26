import { home } from "../url";
import { EmployeeResponse } from "../Store/Employees/interfaces";

export const editEmployee = async ({
  id,
  firstName,
  lastName,
  email,
  position,
}: EmployeeResponse): Promise<void | Error> => {
  const resource = `${home}/employees/${id}`;
  const fetchInit = {
    method: "PATCH",
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      position,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(resource, fetchInit);
  if (!response.ok) {
    throw new Error("Couldn't update employee");
  }
};
