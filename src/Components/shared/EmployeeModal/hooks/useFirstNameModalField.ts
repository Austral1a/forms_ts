import { useMemo } from "react";
import { nameValidationRule } from "../../Validations";
import { FormikHandlers, useField } from "formik";
import { EmployeeFormFields } from "../common";

interface FirstNameFieldResult {
  firstNameField: {
    value: string;
    touched: boolean;
    error: string | undefined;
    onBlur: FormikHandlers["handleBlur"];
    onChange: FormikHandlers["handleChange"];
  };
}

export const useFirstNameModalField = (): FirstNameFieldResult => {
  const firstNameValidator = useMemo(() => nameValidationRule(), []);

  const [fieldFirstName, metaFirstName] = useField<string>({
    id: EmployeeFormFields.FIRST_NAME,
    name: EmployeeFormFields.FIRST_NAME,
    validate: firstNameValidator,
  });
  return {
    firstNameField: {
      value: fieldFirstName.value,
      touched: metaFirstName.touched,
      error: metaFirstName.error,
      onBlur: fieldFirstName.onBlur,
      onChange: fieldFirstName.onChange,
    },
  };
};
