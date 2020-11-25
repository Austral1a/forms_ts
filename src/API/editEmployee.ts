import { home } from "../url";

export const editEmployee = async (
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  position: string
): Promise<void | Error> => {
  const resource: string = `${home}/employees/${id}`;
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
