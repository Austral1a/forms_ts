import { home } from "../url";

export const createEmployee = (
  firstName: string,
  lastName: string,
  email: string,
  position: string
): void => {
  const url = `${home}/employees`;
  fetch(url, {
    method: "POST",
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
