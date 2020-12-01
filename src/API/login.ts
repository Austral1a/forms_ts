import { home } from "../url";

const url = `${home}/users`;

const isUserExists = (email: string): Promise<boolean> => {
  return fetch(`${url}?email=${email}`)
    .then((res) => res.json())
    .then((user) => !user.length);
};

interface LoginParams {
  email: string;
  password: string;
}

export const login = async (loginValues: LoginParams) => {
  const { email, password } = loginValues;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to login");
  }
};
