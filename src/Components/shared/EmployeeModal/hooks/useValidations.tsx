import {
  isInputValid,
  patterns,
  ValidationMessages,
} from "../../../../helpers";

interface Values {
  firstName?: string;
  lastName?: string;
  email?: string;
  position?: string;
}

export const useValidations = (values: Values): Values => {
  const errors: Values = {};
  if (!isInputValid(patterns.name, typeof values.firstName)) {
    errors.firstName = ValidationMessages.invalidName;
  } else {
    delete errors.firstName;
  }
  if (!isInputValid(patterns.name, typeof values.lastName))
    errors.lastName = ValidationMessages.invalidName;
  else delete errors.lastName;
  if (!isInputValid(patterns.email, typeof values.email))
    errors.email = ValidationMessages.invalidEmail;
  else delete errors.email;
  return errors;
};
