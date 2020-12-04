import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import {
  emailValidationRule,
  nameValidationRule,
  positionsValidationRule,
} from "@helpers";
import { EmployeeFieldName } from "@Components";

export interface EmployeeFormFieldValues {
  value: string;
  touched: boolean;
  error: string | undefined;
  onBlur: FormikHandlers["handleBlur"];
  onChange: FormikHandlers["handleChange"];
}

export interface EmployeeFormFieldsResult {
  firstNameField: EmployeeFormFieldValues;
  lastNameField: EmployeeFormFieldValues;
  positionField: EmployeeFormFieldValues;
  emailField: EmployeeFormFieldValues;
}

export const useEmployeeFormFields = (): EmployeeFormFieldsResult => {
  const emailValidator = useMemo(() => emailValidationRule(), []);
  const nameValidator = useMemo(() => nameValidationRule(), []);
  const positionsValidator = useMemo(() => positionsValidationRule(), []);

  const [fieldEmail, metaEmail] = useField<string>({
    id: EmployeeFieldName.EMAIL,
    name: EmployeeFieldName.EMAIL,
    validate: emailValidator,
  });
  const [fieldPosition, metaPosition] = useField<string>({
    id: EmployeeFieldName.POSITION,
    name: EmployeeFieldName.POSITION,
    validate: positionsValidator,
  });
  const [fieldLastName, metaLastName] = useField<string>({
    id: EmployeeFieldName.LAST_NAME,
    name: EmployeeFieldName.LAST_NAME,
    validate: nameValidator,
  });
  const [fieldFirstName, metaFirstName] = useField<string>({
    id: EmployeeFieldName.FIRST_NAME,
    name: EmployeeFieldName.FIRST_NAME,
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
  };
};
