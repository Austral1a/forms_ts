import { home } from "../url";

const url = `${home}/users`;

const isUserExists = (email: string): Promise<boolean> => {
  return fetch(`${url}?email=${email}`)
    .then((res) => res.json())
    .then((user) => user.length > 0);
};

export const login = (email: string, password: string) => {
  isUserExists(email).then((isExists) => {
    console.log(isExists, "isExists", email, password);
    if (!isExists) {
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // TODO: Set something like session_id in storage to track if user is logged in
      // .....code
    } /* else {
      fetch(`${url}?email=${email}`)
          .then(res => res.json())
          .then(user => {

          })
    }*/
  });
};
