import { ReactElement, useMemo } from "react";
import { useField } from "formik";
import { EmployeeFormFields } from "../common/enums";
import { nameValidationRule } from "../../Validations/NameValidation";

export const useFirstNameField = () => {
  const firstNameValidator = useMemo(() => nameValidationRule(), []);

  const [fieldFirstName, metaFirstName, helpersFirstName] = useField<string>({
    id: EmployeeFormFields.FIRST_NAME,
    name: EmployeeFormFields.FIRST_NAME,
    validate: firstNameValidator,
  });
  return {
    firstNameField: {
      value: fieldFirstName.value,
      setValue: helpersFirstName.setValue,
      touched: metaFirstName.touched,
      error: metaFirstName.error,
      onBlur: fieldFirstName.onBlur,
      onChange: fieldFirstName.onChange,
    },
  };
};
