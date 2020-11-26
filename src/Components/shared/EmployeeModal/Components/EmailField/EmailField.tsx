import React, { ReactElement, useMemo } from "react";
import { useField } from "formik";
import { EmployeeFormFields } from "../../common";
import { emailValidationRule } from "../../../Validations";
import { InputField } from "../../common";
import { email as emailSvg } from "../../../../../assets";
import { translations } from "../../../../../helpers";

export const EmailField = (): ReactElement => {
  const emailNameValidator = useMemo(() => emailValidationRule(), []);
  const {
    field: { emailText },
  } = translations;
  const [fieldEmailName, metaEmailName] = useField<string>({
    id: EmployeeFormFields.EMAIL,
    name: EmployeeFormFields.EMAIL,
    validate: emailNameValidator,
  });
  return (
    <InputField
      placeholder={emailText}
      icon={emailSvg}
      name={EmployeeFormFields.EMAIL}
      value={fieldEmailName.value}
      touched={metaEmailName.touched}
      error={metaEmailName.error}
      handleBlur={fieldEmailName.onBlur}
      handleChange={fieldEmailName.onChange}
    />
  );
};
