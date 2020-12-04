import {
  isInputValid,
  patterns,
  patternName,
  ValidationMessages,
  translations,
} from "@helpers";

const {
  button: { chosePositionText },
} = translations;

export const emailValidationRule = () => {
  const { email } = patternName;

  return (emailVal: string) => {
    if (!isInputValid(patterns[email], emailVal)) {
      return ValidationMessages.invalidEmail;
    }
    return;
  };
};

export const nameValidationRule = () => {
  const { name } = patternName;

  return (nameVal: string) => {
    if (!isInputValid(patterns[name], nameVal)) {
      return ValidationMessages.invalidName;
    }
    return;
  };
};

export const passwordValidationRule = () => {
  const { password } = patternName;

  return (passwordVal: string) => {
    if (!isInputValid(patterns[password], passwordVal)) {
      return ValidationMessages.invalidPassword;
    }
    return;
  };
};

export const positionsValidationRule = () => {
  return (positionsVal: string) => {
    if (!positionsVal) {
      return ValidationMessages.invalidPosition;
    }
    return;
  };
};
