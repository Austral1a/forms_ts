import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import { emailValidationRule, passwordValidationRule } from "@helpers";
import { LoginFormFields } from "@Login";

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
    id: LoginFormFields.EMAIL,
    name: LoginFormFields.EMAIL,
    validate: emailValidator,
  });
  const [fieldPassword, metaPassword, helperPassword] = useField<string>({
    id: LoginFormFields.PASSWORD,
    name: LoginFormFields.PASSWORD,
    validate: passwordValidator,
  });
  return {
    passwordField: {
      value: fieldPassword.value,
      touched: metaPassword.touched,
      setValue: helperPassword.setValue,
      error: metaPassword.error,
      onBlur: fieldPassword.onBlur,
      onChange: fieldPassword.onChange,
    },
    emailField: {
      value: fieldEmail.value,
      touched: metaEmail.touched,
      setValue: helperEmail.setValue,
      error: metaEmail.error,
      onBlur: fieldEmail.onBlur,
      onChange: fieldEmail.onChange,
    },
  };
};
