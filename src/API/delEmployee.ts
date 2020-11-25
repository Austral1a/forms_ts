import { home } from "../url";

export const delEmployee = async (id: number): Promise<void | Error> => {
  const resource = `${home}/employees/${id}`;
  const response = await fetch(resource, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Couldn't delete employee");
  }
};
