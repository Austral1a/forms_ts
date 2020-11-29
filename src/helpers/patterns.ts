interface Patterns {
  [key: string]: RegExp;
}

export const patterns: Patterns = {
  name: /^[a-zA-Z]+$/,
  email: /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+$/,
  password: /\w{6,}/,
};

export enum patternNames {
  name = "name",
  email = "email",
  password = "password",
}
