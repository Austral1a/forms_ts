import { home } from "../url";

export const delEmployee = (id: number): void => {
  const resource = `${home}/employees/${id}`;
  fetch(resource, {
    method: "DELETE",
  });
};
