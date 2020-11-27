import {
  isInputValid,
  patterns,
  patternNames,
  ValidationMessages,
} from "@helpers";

export const emailValidationRule = () => {
  const { email } = patternNames;
  return (emailVal: string) => {
    if (!isInputValid(patterns[email], emailVal)) {
      return ValidationMessages.invalidEmail;
    }
    return;
  };
};
