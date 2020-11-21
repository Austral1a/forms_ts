import { home } from "../url";

export const createEmployee = (name: string, position: string): void => {
  const url = `${home}/employees`;
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name,
      position,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
