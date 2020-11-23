import { home } from "../url";

export const editEmployee = (
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  position: string
): void => {
  const resource: string = `${home}/employees/${id}`;
  fetch(resource, {
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
  });
};
