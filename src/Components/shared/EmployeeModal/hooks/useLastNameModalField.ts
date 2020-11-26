import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import { nameValidationRule } from "../../Validations";
import { EmployeeFormFields } from "../common";

interface LastNameFieldResult {
  lastNameField: {
    value: string;
    touched: boolean;
    error: string | undefined;
    onBlur: FormikHandlers["handleBlur"];
    onChange: FormikHandlers["handleChange"];
  };
}

export const useLastNameModalField = (): LastNameFieldResult => {
  const lastNameValidator = useMemo(() => nameValidationRule(), []);

  const [fieldLastName, metaLastName] = useField<string>({
    id: EmployeeFormFields.LAST_NAME,
    name: EmployeeFormFields.LAST_NAME,
    validate: lastNameValidator,
  });
  return {
    lastNameField: {
      value: fieldLastName.value,
      touched: metaLastName.touched,
      error: metaLastName.error,
      onBlur: fieldLastName.onBlur,
      onChange: fieldLastName.onChange,
    },
  };
};
