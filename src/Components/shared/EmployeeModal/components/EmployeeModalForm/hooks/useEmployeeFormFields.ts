import { FormikHandlers, useField } from "formik";
import { useMemo } from "react";
import {
  emailValidationRule,
  nameValidationRule,
  passwordValidationRule,
  positionsValidationRule,
} from "@helpers";
import { EmployeeFormFields } from "@Components";

export interface EmployeeFormFieldValues {
  value: string;
  touched: boolean;
  error: string | undefined;
  onBlur: FormikHandlers["handleBlur"];
  setValue: (value: string, shouldValidate?: boolean) => void;
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

  const [fieldEmail, metaEmail, helperEmail] = useField<string>({
    id: EmployeeFormFields.EMAIL,
    name: EmployeeFormFields.EMAIL,
    validate: emailValidator,
  });
  const [fieldPosition, metaPosition, helperPosition] = useField<string>({
    id: EmployeeFormFields.POSITION,
    name: EmployeeFormFields.POSITION,
    validate: positionsValidator,
  });
  const [fieldLastName, metaLastName, helperLastName] = useField<string>({
    id: EmployeeFormFields.LAST_NAME,
    name: EmployeeFormFields.LAST_NAME,
    validate: nameValidator,
  });
  const [fieldFirstName, metaFirstName, helperFirstName] = useField<string>({
    id: EmployeeFormFields.FIRST_NAME,
    name: EmployeeFormFields.FIRST_NAME,
    validate: nameValidator,
  });
  
  return {
    firstNameField: {
      value: fieldFirstName.value,
      touched: metaFirstName.touched,
      setValue: helperFirstName.setValue,
      error: metaFirstName.error,
      onBlur: fieldFirstName.onBlur,
      onChange: fieldFirstName.onChange,
    },
    lastNameField: {
      value: fieldLastName.value,
      touched: metaLastName.touched,
      setValue: helperLastName.setValue,
      error: metaLastName.error,
      onBlur: fieldLastName.onBlur,
      onChange: fieldLastName.onChange,
    },
    emailField: {
      value: fieldEmail.value,
      touched: metaEmail.touched,
      setValue: helperEmail.setValue,
      error: metaEmail.error,
      onBlur: fieldEmail.onBlur,
      onChange: fieldEmail.onChange,
    },
    positionField: {
      value: fieldPosition.value,
      touched: metaPosition.touched,
      setValue: helperPosition.setValue,
      error: metaPosition.error,
      onBlur: fieldPosition.onBlur,
      onChange: fieldPosition.onChange,
    },
  };
};
