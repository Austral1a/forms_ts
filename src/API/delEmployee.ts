import { home } from "../url";

export const deleteEmployee = async (id: number): Promise<void> => {
  const resource = `${home}/employees/${id}`;
  const response = await fetch(resource, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Couldn't delete employee");
  }
};
