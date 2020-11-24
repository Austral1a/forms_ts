import {
  isInputValid,
  patterns,
  ValidationMessages,
} from "../../../../helpers";

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
}

export const useValidations = (values: Values): Values => {
  const errors: Values = {
    firstName: "",
    lastName: "",
    email: "",
    position: "",
  };
  if (!isInputValid(patterns.name, values.firstName))
    errors.firstName = ValidationMessages.firstName;
  if (!isInputValid(patterns.name, values.lastName))
    errors.lastName = ValidationMessages.lastName;
  if (!isInputValid(patterns.email, values.email))
    errors.email = ValidationMessages.email;
  return errors;
};
