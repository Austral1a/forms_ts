import { isInputValid, ValidationMessages, patterns } from "../../helpers";

interface Values {
  email: string;
  password: string;
}

export const useValidations = (values: Values): Values => {
  const errors: Values = { email: "", password: "" };
  if (!isInputValid(patterns.email, values.email))
    errors.email = ValidationMessages.email;
  if (!isInputValid(patterns.password, values.password))
    errors.password = ValidationMessages.password;
  return errors;
};
