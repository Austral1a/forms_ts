import {
  isInputValid,
  patterns,
  patternNames,
  ValidationMessages,
  translations,
} from "@helpers";

const {
  button: { chosePositionText },
} = translations;
export const emailValidationRule = () => {
  const { email } = patternNames;

  return (emailVal: string) => {
    if (!isInputValid(patterns[email], emailVal)) {
      return ValidationMessages.invalidEmail;
    }
    return;
  };
};

export const nameValidationRule = () => {
  const { name } = patternNames;

  return (nameVal: string) => {
    if (!isInputValid(patterns[name], nameVal)) {
      return ValidationMessages.invalidName;
    }
    return;
  };
};

export const passwordValidationRule = () => {
  const { password } = patternNames;

  return (passwordVal: string) => {
    if (!isInputValid(patterns[password], passwordVal)) {
      return ValidationMessages.invalidPassword;
    }
    return;
  };
};

export const positionsValidationRule = () => {
  return (positionsVal: string) => {
    if (positionsVal === chosePositionText) {
      return ValidationMessages.invalidPosition;
    }
    return;
  };
};
