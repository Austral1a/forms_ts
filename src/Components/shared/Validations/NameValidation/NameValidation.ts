import {
  isInputValid,
  patterns,
  patternNames,
  ValidationMessages,
} from "../../../../helpers";

export const nameValidationRule = () => {
  const { name } = patternNames;
  return (nameVal: string) => {
    if (!isInputValid(patterns[name], nameVal)) {
      return ValidationMessages.invalidName;
    }
    return;
  };
};
