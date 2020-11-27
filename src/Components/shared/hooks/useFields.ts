import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import {
  emailValidationRule,
  nameValidationRule,
  passwordValidationRule,
} from "@helpers";
import { EmployeeFormFields } from "@Components";

export interface FieldValues {
  value: string;
  touched: boolean;
  error: string | undefined;
  onBlur: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
}

export interface FieldsResult {
  firstNameField: FieldValues;
  lastNameField: FieldValues;
  positionField: FieldValues;
  passwordField: FieldValues;
  emailField: FieldValues;
}

export const useFields = (): FieldsResult => {
  const emailValidator = useMemo(() => emailValidationRule(), []);
  const nameValidator = useMemo(() => nameValidationRule(), []);
  const passwordValidator = useMemo(() => passwordValidationRule(), []);

  const [fieldEmail, metaEmail] = useField<string>({
    id: EmployeeFormFields.EMAIL,
    name: EmployeeFormFields.EMAIL,
    validate: emailValidator,
  });
  const [fieldPassword, metaPassword] = useField<string>({
    id: EmployeeFormFields.PASSWORD,
    name: EmployeeFormFields.PASSWORD,
    validate: passwordValidator,
  });
  const [fieldPosition, metaPosition] = useField<string>({
    id: EmployeeFormFields.POSITION,
    name: EmployeeFormFields.POSITION,
  });
  const [fieldLastName, metaLastName] = useField<string>({
    id: EmployeeFormFields.LAST_NAME,
    name: EmployeeFormFields.LAST_NAME,
    validate: nameValidator,
  });
  const [fieldFirstName, metaFirstName] = useField<string>({
    id: EmployeeFormFields.FIRST_NAME,
    name: EmployeeFormFields.FIRST_NAME,
    validate: nameValidator,
  });
  return {
    firstNameField: {
      value: fieldFirstName.value,
      touched: metaFirstName.touched,
      error: metaFirstName.error,
      onBlur: fieldFirstName.onBlur,
      onChange: fieldFirstName.onChange,
    },
    lastNameField: {
      value: fieldLastName.value,
      touched: metaLastName.touched,
      error: metaLastName.error,
      onBlur: fieldLastName.onBlur,
      onChange: fieldLastName.onChange,
    },
    emailField: {
      value: fieldEmail.value,
      touched: metaEmail.touched,
      error: metaEmail.error,
      onBlur: fieldEmail.onBlur,
      onChange: fieldEmail.onChange,
    },
    positionField: {
      value: fieldPosition.value,
      touched: metaPosition.touched,
      error: metaPosition.error,
      onBlur: fieldPosition.onBlur,
      onChange: fieldPosition.onChange,
    },
    passwordField: {
      value: fieldPassword.value,
      touched: metaPassword.touched,
      error: metaPassword.error,
      onBlur: fieldPassword.onBlur,
      onChange: fieldPassword.onChange,
    },
  };
};
