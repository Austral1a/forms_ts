import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import { emailValidationRule } from "../../Validations";
import { EmployeeFormFields } from "../common";

interface EmailFieldResult {
  emailField: {
    value: string;
    touched: boolean;
    error: string | undefined;
    onBlur: FormikHandlers["handleBlur"];
    onChange: FormikHandlers["handleChange"];
  };
}

export const useEmailModalField = (): EmailFieldResult => {
  const emailValidator = useMemo(() => emailValidationRule(), []);

  const [fieldEmail, metaEmail] = useField<string>({
    id: EmployeeFormFields.EMAIL,
    name: EmployeeFormFields.EMAIL,
    validate: emailValidator,
  });
  return {
    emailField: {
      value: fieldEmail.value,
      touched: metaEmail.touched,
      error: metaEmail.error,
      onBlur: fieldEmail.onBlur,
      onChange: fieldEmail.onChange,
    },
  };
};
