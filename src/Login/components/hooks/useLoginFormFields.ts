import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import { emailValidationRule, passwordValidationRule } from "@helpers";
import { EmployeeFormFields } from "@Components";

export interface LoginFormFieldValues {
  value: string;
  touched: boolean;
  error: string | undefined;
  onBlur: FormikHandlers["handleBlur"];
  setValue: (value: string, shouldValidate?: boolean) => void;
  onChange: FormikHandlers["handleChange"];
}

export interface LoginFormFieldsResult {
  passwordField: LoginFormFieldValues;
  emailField: LoginFormFieldValues;
}

export const useLoginFormFields = (): LoginFormFieldsResult => {
  const emailValidator = useMemo(() => emailValidationRule(), []);

  const passwordValidator = useMemo(() => passwordValidationRule(), []);

  const [fieldEmail, metaEmail, helperEmail] = useField<string>({
    id: EmployeeFormFields.EMAIL,
    name: EmployeeFormFields.EMAIL,
    validate: emailValidator,
  });
  const [fieldPassword, metaPassword, helperPassword] = useField<string>({
    id: EmployeeFormFields.PASSWORD,
    name: EmployeeFormFields.PASSWORD,
    validate: passwordValidator,
  });

  return {
    emailField: {
      value: fieldEmail.value,
      touched: metaEmail.touched,
      setValue: helperEmail.setValue,
      error: metaEmail.error,
      onBlur: fieldEmail.onBlur,
      onChange: fieldEmail.onChange,
    },
    passwordField: {
      value: fieldPassword.value,
      touched: metaPassword.touched,
      setValue: helperPassword.setValue,
      error: metaPassword.error,
      onBlur: fieldPassword.onBlur,
      onChange: fieldPassword.onChange,
    },
  };
};
